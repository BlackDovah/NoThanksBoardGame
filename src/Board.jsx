/* eslint-disable react/prop-types */
import { Player } from "./components/Player";
import { Ground } from "./components/Ground";
import { Moves } from "./components/Moves";
import "./output.css";
export const NoThanksBoard = ({ G, ctx, moves, reset }) => {
  const playerColor = ["red", "green", "blue", "yellow"];
  const { currentPlayer, gameover } = ctx;
  const currentColor = playerColor[currentPlayer];
  const winner = gameover ? gameover.message : "";

  return (
    <div className="board">
      <div className="col-start-1 row-start-1 justify-self-start self-start">
        <div className="text-6xl bg-red-600 rounded-full p-6">
          NoThanks!<br></br> The Play Or Pay Card Game
        </div>
      </div>
      {[0, 1, 2, 3].map((playerID) => (
        <Player
          key={playerID}
          playerID={playerID}
          tokens={G.hand[playerID.toString()].tokens}
          cards={G.hand[playerID.toString()].cards}
          color={playerColor[playerID]}
        />
      ))}
      <Ground 
      G = {G}
      currentColor={currentColor}
      />
      <Moves 
      moves={moves}
      />
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
