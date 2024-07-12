/*!
 * Lucid Light Lottery
 *
 * Copyright (c) 2024 Adam Burucs
 *
 * MIT Licensed
 */

import * as crypto from "crypto";
import { WinningNumbers } from "./winning-numbers.model.js";

export function generateRandomInteger(min: number, max: number): number {
  const range: number = max - min + 1;
  const bytesNeeded: number = Math.ceil(Math.log2(range) / 8);
  const randomBytes: Buffer = crypto.randomBytes(bytesNeeded);
  const randomInt: number =
    (parseInt(randomBytes.toString("hex"), 16) % range) + min;

  return randomInt;
}

export function generateUniqueDraw(): WinningNumbers {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < 5) {
    const randomNumber = generateRandomInteger(1, 90);
    if (!uniqueNumbers.has(randomNumber)) {
      uniqueNumbers.add(randomNumber);
    }
  }

  const uniqueArray = Array.from(uniqueNumbers) as number[];
  uniqueArray.sort((a, b) => a - b);

  return uniqueArray as WinningNumbers;
}

export function generate(weeks: number): WinningNumbers[] {
  const winningNumbers: WinningNumbers[] = [];

  for (let weekIndex = 0; weekIndex < weeks; weekIndex++) {
    winningNumbers.push(generateUniqueDraw());
  }

  return winningNumbers;
}
