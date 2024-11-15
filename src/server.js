// src/server.js
import { Server, Origins } from 'boardgame.io/dist/cjs/server.js';
import { NoThanks } from './Game.js'; 

const server = Server({
  games: [NoThanks],
  origins: [
    Origins.LOCALHOST_IN_DEVELOPMENT
  ],
  // The server will automatically handle WebSocket connections, so no need to do anything extra
});

server.run(8000, () => console.log(`Server is runing on port 8000`));  // Make sure to expose the WebSocket server on port 8000
