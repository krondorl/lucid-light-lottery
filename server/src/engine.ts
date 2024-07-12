import { generate } from "./generator.js";
import { WebSocket, WebSocketServer } from "ws";
import { inspect } from "util";
import { WinningNumbers } from "./winning-numbers.model.js";
import { calculateCosts, getDrawMatches } from "./utilities.js";

interface AppState {
  randomMode: boolean;
  weekIndex: number;
  yearIndex: number;
  numberOfTicket: number;
  yearsSpent: number;
  costOfTickets: number;
  matches2: number;
  matches3: number;
  matches4: number;
  matches5: number;
  winningNumbers: WinningNumbers;
  playerNumbers: WinningNumbers;
}

const MAX_WEEKS = 5;
const TIME_PER_WEEK = 500; // Milliseconds
const RANDOM_MODE = true; // Player gets random numbers when true
const TICKET_PRICE = 300; // HUF currency

const appState: AppState = {
  randomMode: RANDOM_MODE,
  weekIndex: 0,
  yearIndex: 0,
  numberOfTicket: 0,
  yearsSpent: 0,
  costOfTickets: TICKET_PRICE,
  matches2: 0,
  matches3: 0,
  matches4: 0,
  matches5: 0,
  winningNumbers: [0, 0, 0, 0, 0],
  playerNumbers: [0, 0, 0, 0, 0],
};

let intervalId: NodeJS.Timeout | null = null;

function setMatchesState(matches: number): void {
  switch (matches) {
    case 2:
      appState.matches2 += 1;
      break;
    case 3:
      appState.matches3 += 1;
      break;
    case 4:
      appState.matches4 += 1;
      break;
    case 5:
      appState.matches5 += 1;
      break;
    default:
  }
}

function drawLoop(ws: WebSocket): void {
  const winningNumbers = generate(MAX_WEEKS);
  const playerNumbers = generate(MAX_WEEKS);
  let index = 0;
  intervalId = setInterval(() => {
    if (index < winningNumbers.length) {
      console.log();
      console.log(inspect(winningNumbers[index]));
      const drawMatches = getDrawMatches(
        winningNumbers[index],
        playerNumbers[index]
      );

      setMatchesState(drawMatches);

      const drawData = {
        numberOfTicket: index + 1,
        yearsSpent: 0, // no years (only 5 weeks are drawn)
        costOfTickets: calculateCosts(index + 1, TICKET_PRICE),
        number1: winningNumbers[index][0],
        number2: winningNumbers[index][1],
        number3: winningNumbers[index][2],
        number4: winningNumbers[index][3],
        number5: winningNumbers[index][4],
        matches2: appState.matches2,
        matches3: appState.matches3,
        matches4: appState.matches4,
        matches5: appState.matches5,
      };

      ws.send(JSON.stringify(drawData));
      index++;
    } else {
      clearInterval(intervalId as NodeJS.Timeout);
    }
  }, TIME_PER_WEEK);
}

export function main(): void {
  console.log("SERVER STARTED");
  console.log("Lotto Simulator");
  console.log();
  console.log("Opening Websocket...");

  const wss = new WebSocketServer({ port: 8080 });

  wss.on("connection", (ws) => {
    console.log("Server Connection is OK");

    ws.on("error", console.error);

    ws.on("message", (data) => {
      const message = data.toString();
      console.log("from Client: ", message);
      if (message === "START") {
        drawLoop(ws);
      }
    });

    console.log();
    console.log("Sending data to Client");
    ws.send("Hello, client!");

    ws.on("close", () => {
      clearInterval(intervalId as NodeJS.Timeout);
    });
  });
}
