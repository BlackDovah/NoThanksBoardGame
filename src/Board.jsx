/* eslint-disable react/prop-types */
import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Moves } from "./components/Moves";
import "./output.css";
import "./Board.css";
export const NoThanksBoard = ({ G, ctx, moves, reset }) => {
  const playerColor = ["red", "green", "blue", "yellow"];
  const { currentPlayer, gameover } = ctx;
  const currentColor = playerColor[currentPlayer];
  const winner = gameover ? gameover.message : "";

  return (
    <div className="board bg-gray-800 grid grid-cols-3 gap-4">
      <div
        className="col-start-1 row-start-1 justify-self-start self-start
       2xl:text-4xl md:text-3xl sm:text-2xl xsm:text-sm py-10 pl-10 pr-6 bg-red-600 
       border-white border-2 rounded-full"
      >
        NoThanks!<br></br> The Play Or Pay Card Game
      </div>
      <a
        href="https://www.amigo.games/wp-content/uploads/2024/08/18414-014-NoThanks-Manual_001-LAYOUT.pdf"
        target="_blank"
        className="col-start-1 row-start-2 justify-self-start self-start"
      >
        Click here for the instructions
      </a>
      {[0, 1, 2, 3].map((playerID) => (
        <Player
          key={playerID}
          playerID={playerID}
          tokens={G.hand[playerID.toString()].tokens}
          cards={G.hand[playerID.toString()].cards}
          color={playerColor[playerID]}
        />
      ))}
      <Ground G={G} currentColor={currentColor} />
      <Moves moves={moves} />
      {ctx.gameover && (
        <div className="gameover">
          <div className="winner">{winner} </div>
          <button
            className="new-game"
            onClick={reset}
            aria-label="create-new-game"
          >
            Start new game
          </button>
        </div>
      )}
    </div>
  );
};
