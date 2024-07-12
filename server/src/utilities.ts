import { WinningNumbers } from "./winning-numbers.model.js";

export function getDrawMatches(
  drawNumbers: WinningNumbers,
  playerNumbers: WinningNumbers
): number {
  let matches = 0;

  for (const playerNumber of playerNumbers) {
    if (drawNumbers.includes(playerNumber)) {
      matches += 1;
    }
  }

  return matches;
}

export function calculateCosts(
  numberOfTickets: number,
  ticketPrice: number
): number {
  return numberOfTickets * ticketPrice;
}
