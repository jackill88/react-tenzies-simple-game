# Tenzies Simple Game

A small React + Vite implementation of the dice game **Tenzies**.

## About The Game

The goal is to keep rolling until all dice show the same number.

- Click a die to freeze it at its current value.
- Click **Roll** to re-roll only the dice that are not held.
- When all dice match, confetti appears and the round resets.

## Tech Stack

- [Node.js](https://nodejs.org/)
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- ESLint

## Project Structure

- `tenzies_game/App.jsx` - main game logic
- `tenzies_game/Dice.jsx` - die button component
- `tenzies_game/RollButton.jsx` - roll action button
- `tenzies_game/Confetti.jsx` - win animation canvas
- `tenzies_game/index.jsx` - React entry point
- `tenzies_game/index.css` - styling

## Requirements

Install:

- Node.js 18 or newer
- npm, which comes with Node.js

## Node.js Setup

If Node.js is not installed yet:

1. Download the current LTS version from the official Node.js website.
2. Install it using the default options.
3. Verify the installation:

```bash
node --version
npm --version
```

If you are using `nvm`, you can install and switch to an LTS version with:

```bash
nvm install --lts
nvm use --lts
```

## Vite Setup

This project already uses Vite, so you do not need to create a new Vite app from scratch. If you want to understand the setup or recreate it in a new project, the usual flow is:

```bash
npm create vite@latest
```

Then choose:

- a project name
- `React`
- `JavaScript` or `TypeScript`

After that, install dependencies and start the dev server:

```bash
npm install
npm run dev
```

## Run This Project

From the project root:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create a production build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project

## How To Play

1. Start the app.
2. Click a die to hold its value.
3. Click **Roll** to roll the remaining dice.
4. Keep going until all dice are the same number.

## Notes

- The game uses React state to track held dice and rolling values.
- Confetti is rendered on the win state with an animated canvas.

