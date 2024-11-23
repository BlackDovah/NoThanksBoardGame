/* eslint-disable react/prop-types */
import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Moves } from "./components/Moves";
import { Link } from "react-router-dom";
import "./output.css";
import "./Board.css";
export const NoThanksBoard = ({ G, ctx, moves, reset }) => {
  const playerColor = ["red", "green", "blue", "yellow"];
  const { currentPlayer, gameover } = ctx;
  const currentColor = playerColor[currentPlayer];
  const winner = gameover ? gameover.message : "";

  return (
    <div className="board bg-gray-800 grid grid-cols-3 gap-4 absolute">
      <div
        className="col-start-1 row-start-1 justify-self-start self-start
       2xl:text-4xl md:text-3xl sm:text-2xl xsm:text-sm py-10 pl-10 pr-6 bg-red-600 
       border-white border-2 rounded-full"
      >
        NoThanks!<br></br>The Play Or Pay Card Game
      </div>
      <Link
        to="/instructions"
        className="col-start-2 row-start-1 
      justify-self-center self-start xsm:text-xs bg-green-400 
       border-2 text-lg relative p-4 rounded-lg
       text-black font-bold text-shadow-custom"
      >
        How To Play
      </Link>
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
