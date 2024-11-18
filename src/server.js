import { Server, Origins } from 'boardgame.io/dist/cjs/server.js';
import path from 'path';
import { fileURLToPath } from 'url';
import serve from 'koa-static';
import cors from '@koa/cors';
import { NoThanks } from './Game.js';

const server = Server({
  games: [NoThanks],
  origins: [
    Origins.LOCALHOST_IN_DEVELOPMENT, "https://no-thanks-board-game.vercel.app/"
  ],
});

server.app.use(cors({
  origin: ['http://localhost:5173', 'https://no-thanks-board-game.vercel.app'],
  credentials: true,
}));

const PORT = process.env.PORT || 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontEndAppBuildPath = path.resolve(__dirname, './dist');
// server.app.use(serve(frontEndAppBuildPath))
server.run(PORT, () => {
  server.app.use(
    async (ctx, next) => await serve(frontEndAppBuildPath)(
      Object.assign(ctx, { path: 'index.html' }),
      next
    )
  );
  console.log(`Server running on port ${PORT}`);
}); 