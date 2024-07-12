# System Design for Lotto Simulator

Notes about the parts of the application and how they work together.

![System diagram](docs/system-diagram-01.drawio.svg "System diagram")

## Client

The front end handles input and speed control.

## Server

This backend part can simulate the drawing process and send back the data to the client.

## Engine

Runs the simulation.

## Generator

This part generates the lottery numbers.

## DB

The database stores all data specified in the task documentation.

## Communications protocol

The application uses `WebSocket` to provide quick, bidirectional communication over a single `TCP` connection.
