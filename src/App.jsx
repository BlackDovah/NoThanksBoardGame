import { Client } from 'boardgame.io/react';
import { NoThanks } from './Game';
import { NoThanksBoard } from './Board';

const App = Client({
  game: NoThanks,
  numPlayers: 4,
  board: NoThanksBoard,
})

export default App;