![Balls](docs/balls-6005924_640.jpg "Lottery Balls")

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

## Usage with `npm`

1. You need at least [Node.js](https://nodejs.org/en) v20.11.1 to start locally.
1. Installation: run `npm install` in the `client` and `server` directories.
1. After installation, use `npm start` in the `client` and `server` directories.
1. Open the browser at `http://localhost:5173/`
1. Click on the **Play with random numbers** checkbox in the GUI to start the lottery generation.

## Usage with `Docker`

1. You need [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed
1. Start Docker Desktop
1. In the project repo, where `docker-compose.yaml` is located, execute `docker compose up`

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
