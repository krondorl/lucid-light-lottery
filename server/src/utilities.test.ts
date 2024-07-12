import { expect, test } from "vitest";
import { getDrawMatches } from "./utilities.js";
import { WinningNumbers } from "./winning-numbers.model.js";

test("gets number of draw matches (expects 0)", () => {
  const drawNumbers: WinningNumbers = [1, 2, 3, 4, 5];
  const playerNumbers: WinningNumbers = [10, 20, 30, 40, 50];
  const result = getDrawMatches(drawNumbers, playerNumbers);

  expect(Number.isInteger(result)).toBe(true);
  expect(result).toBe(0);
});

test("gets number of draw matches (expects 1)", () => {
  const drawNumbers: WinningNumbers = [1, 2, 3, 4, 5];
  const playerNumbers: WinningNumbers = [1, 10, 20, 30, 40];
  const result = getDrawMatches(drawNumbers, playerNumbers);

  expect(Number.isInteger(result)).toBe(true);
  expect(result).toBe(1);
});

test("gets number of draw matches (expects 5)", () => {
  const drawNumbers: WinningNumbers = [1, 2, 3, 4, 5];
  const playerNumbers: WinningNumbers = [1, 2, 3, 4, 5];
  const result = getDrawMatches(drawNumbers, playerNumbers);

  expect(Number.isInteger(result)).toBe(true);
  expect(result).toBe(5);
});
