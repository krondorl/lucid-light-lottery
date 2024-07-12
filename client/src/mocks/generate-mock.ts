interface MockData {
  numberOfTicket: number;
  yearsSpent: number;
  costOfTickets: number;
  matches2: number;
  matches3: number;
  matches4: number;
  matches5: number;
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
}

function generateRandomInteger(
  minimumValue: number,
  maximumValue: number
): number {
  const randomNumber =
    Math.floor(Math.random() * (maximumValue - minimumValue + 1)) +
    minimumValue;
  return randomNumber;
}

function generateUniqueNumbers(
  min: number,
  max: number,
  count: number
): number[] {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!uniqueNumbers.has(randomNumber)) {
      uniqueNumbers.add(randomNumber);
    }
  }

  const uniqueArray = Array.from(uniqueNumbers) as number[];
  uniqueArray.sort((a, b) => a - b);

  return uniqueArray;
}

function generateMock(): MockData {
  const winningNumbers = generateUniqueNumbers(1, 90, 5);
  const matchesNumbers = generateUniqueNumbers(10, 100, 4);
  const numberOfTickets = generateRandomInteger(1, 1000);
  const yearsSpent = generateRandomInteger(1, 1000);
  const costOfTickets = generateRandomInteger(1, 1000);

  const mock = {
    numberOfTicket: numberOfTickets,
    yearsSpent: yearsSpent,
    costOfTickets: costOfTickets,
    matches2: matchesNumbers[0],
    matches3: matchesNumbers[1],
    matches4: matchesNumbers[2],
    matches5: matchesNumbers[3],
    number1: winningNumbers[0],
    number2: winningNumbers[1],
    number3: winningNumbers[2],
    number4: winningNumbers[3],
    number5: winningNumbers[4],
  };

  return mock;
}

export default generateMock;
