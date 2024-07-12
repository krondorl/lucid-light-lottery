/*!
 * Lucid Light Lottery
 *
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import { expect, test } from "vitest";
import {
  generate,
  generateRandomInteger,
  generateUniqueDraw,
} from "./generator.js";

test("generates a random integer between 1 and 90", () => {
  const result = generateRandomInteger(1, 90);

  expect(Number.isInteger(result)).toBe(true);
  expect(result).toBeGreaterThanOrEqual(1);
  expect(result).toBeLessThanOrEqual(90);
});

test("generates a unique draw", () => {
  const result = generateUniqueDraw();

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(5);
  expect(result.every((num: number) => Number.isInteger(num))).toBe(true);
  expect(result.every((num: number) => num >= 1)).toBe(true);
  expect(result.every((num: number) => num <= 90)).toBe(true);
  expect(
    result.every(
      (num: number, index: number, array) => array.indexOf(num) === index
    )
  ).toBe(true);
});

test("generates the specified number of weeks", () => {
  const result = generate(5);

  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBe(5);
  expect(result.every((num) => Array.isArray(num))).toBe(true);
  expect(result.every((num) => num.length === 5)).toBe(true);
});
