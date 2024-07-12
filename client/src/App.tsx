import "./App.css";
import Summary from "./components/Summary";
import ResultDetails from "./components/ResultDetails";
import WinningNumbers from "./components/WinningNumbers";
import YourNumbers from "./components/YourNumbers";
import PlayWithRandom from "./components/PlayWithRandom";
import SpeedControl from "./components/SpeedControl";
import { useEffect, useRef, useState } from "react";
import StartDialog from "./dialogs/StartDialog";
import WrongNumbersDialog from "./dialogs/WrongNumbersDialog";

interface ParsedData {
  numberOfTicket: number;
  yearsSpent: number;
  costOfTickets: number;
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  matches2: number;
  matches3: number;
  matches4: number;
  matches5: number;
}

function App() {
  const ws = useRef<WebSocket | null>(null);

  const [summary, setSummary] = useState({
    numberOfTicket: 0,
    yearsSpent: 0,
    costOfTickets: 0,
  });

  const [resultDetails, setResultDetails] = useState({
    matches2: 0,
    matches3: 0,
    matches4: 0,
    matches5: 0,
  });

  const [winningNumbers, setWinningNumbers] = useState({
    number1: 1,
    number2: 2,
    number3: 3,
    number4: 4,
    number5: 5,
  });

  const [yourNumbers, setYourNumbers] = useState({
    number1: 1,
    number2: 1,
    number3: 1,
    number4: 1,
    number5: 1,
  });

  const [playWithRandom, setPlayWithRandom] = useState(false);
  const [speedControl, setSpeedControl] = useState(500);

  const [isStartDialogOpen, setStartDialogOpen] = useState(false);
  const [isWrongNumbersDialogOpen, setWrongNumbersDialogOpen] = useState(false);

  useEffect(() => {
    ws.current = new WebSocket("ws://localhost:8080");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");

    const wsCurrent = ws.current;

    wsCurrent.onmessage = (e) => {
      const rawData = e.data;
      const parsedData: ParsedData = JSON.parse(rawData);

      if (Object.keys(parsedData).length > 0) {
        setSummary({
          costOfTickets: parsedData.costOfTickets,
          numberOfTicket: parsedData.numberOfTicket,
          yearsSpent: parsedData.yearsSpent,
        });
        setResultDetails({
          matches2: parsedData.matches2,
          matches3: parsedData.matches3,
          matches4: parsedData.matches4,
          matches5: parsedData.matches5,
        });
        setWinningNumbers({
          number1: parsedData.number1,
          number2: parsedData.number2,
          number3: parsedData.number3,
          number4: parsedData.number4,
          number5: parsedData.number5,
        });
      }
    };

    return () => {
      wsCurrent.close();
    };
  }, []);

  const setupRandomStart = (mode: boolean): void => {
    setPlayWithRandom(mode);
    setStartDialogOpen(true);
    setTimeout(() => {
      setStartDialogOpen(false);
      if (ws.current) {
        ws.current.send("START");
      }
    }, 750);
  };

  return (
    <>
      <header className="Header align-middle p-3 h-14 bg-gray-700">
        <span className="ml-4 inline-block text-white text-xl font-bold capitalize">
          Lucid Light Lottery
        </span>
      </header>
      <main className="pt-6 p-4">
        <div className="Background mx-auto max-w-3xl bg-white shadow p-4 md:pl-20 md:pt-12 md:pb-12 md:pr-20">
          <h1 className="Result text-brand-indigo text-3xl font-bold font-sans-serif mb-6">
            Result
          </h1>
          <StartDialog isOpen={isStartDialogOpen} />
          <WrongNumbersDialog
            isOpen={isWrongNumbersDialogOpen}
            onWrongNumbersDialogCallback={(closeValue) => {
              setWrongNumbersDialogOpen(closeValue);
            }}
          />

          <Summary
            numberOfTickets={summary.numberOfTicket}
            yearsSpent={summary.yearsSpent}
            costOfTickets={summary.costOfTickets}
          />

          <ResultDetails
            matches2={resultDetails.matches2}
            matches3={resultDetails.matches3}
            matches4={resultDetails.matches4}
            matches5={resultDetails.matches5}
          />

          <WinningNumbers
            number1={winningNumbers.number1}
            number2={winningNumbers.number2}
            number3={winningNumbers.number3}
            number4={winningNumbers.number4}
            number5={winningNumbers.number5}
          />

          <YourNumbers
            onInputChange={(yourNumbers) => {
              setYourNumbers(yourNumbers);
            }}
            readOnly={false}
          />

          <PlayWithRandom
            onCheckboxChange={(randomValue) => {
              setupRandomStart(randomValue);
              // setPlayWithRandom(randomValue);
            }}
          />

          <SpeedControl
            onRangeChange={(speedVal) => {
              setSpeedControl(speedVal);
            }}
          />
        </div>
      </main>
    </>
  );
}

export default App;
