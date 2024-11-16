import { Server, Origins } from 'boardgame.io/dist/cjs/server.js';
import { NoThanks } from './Game.js'; 

const server = Server({
  games: [NoThanks],
  origins: [
    Origins.LOCALHOST_IN_DEVELOPMENT
  ],
});

server.run(8000, () => console.log(`Server is runing on port 8000`)); 