# Lucid Lite Lottery

This lottery program is a React + Node.js full-stack app practice example.

The app works in a limited mode.

**The simulation starts when the user checks the random mode.**

## Stack and Tooling

- framework: React
- styles: Tailwind
- language: TypeScript
- linter: ESLint
- tooling: Vite
- test framework: Vitest
- code formatting: Prettier

## Features

- simulations on the backend
- presentation on the frontend
- architecture plan
- tests
- Node.js Crypto for pseudo-random numbers
- single player mode
- only random mode is supported
- five weeks of data are sent over with fixed intervals from server to client
- Websocket communication
- sketches for preparing databases and abstraction
- dialogs for messages
- prep files for running databases from Docker and init SQL scripts

## Installation

Run `npm install` in the `client` and `server` directories.

## Usage

After installation, use `npm `to `start` in the `client` and `server` directories.

## Test and development environment

I used the following setup:

- Node.js v20.11.0
- npm 10.2.4
- Windows 11
- PowerShell
- VS Code

## System design

[A diagram and description](system-design.md) of the system are available.

## Notes

[The notes file](notes.md) contains valuable links and ideas I used for research and learning.

## Tests

You can check unit tests with these commands in the `server` folder.

- `npm run test`
- `npm run coverage`

## History

I started the project in July 2024.

## License

Please see the [LICENSE file](LICENSE).
