/* eslint-disable react/prop-types */
import { Player } from "./components/Player";
import "./Board.css";
export const NoThanksBoard = ({ G, ctx, moves, reset }) => {
  const playerColor = ["red", "green", "blue", "yellow"];
  const { currentPlayer, gameover } = ctx;
  const currentColor = playerColor[currentPlayer];
  const winner = gameover ? gameover.message : "";
  
  return (
    <div className="board">
      {[0, 1, 2, 3].map((playerID) => (
        <Player
          key={playerID}
          playerID={playerID}
          tokens={G.hand[playerID.toString()].tokens}
          cards={G.hand[playerID.toString()].cards}
          color={playerColor[playerID]}
        />
      ))}
      <div className="card-container">
        <div className="deck" style={{ backgroundColor: currentColor }}>
          NoThanks
        </div>
        <div className="drawnCard" style={{ backgroundColor: currentColor }}>
          Card: {G.ground.currentCard}
        </div>
      </div>
      <div className="button-container">
        <button
          className="place-token-and-pass"
          onClick={moves.placeTokenAndPass}
          aria-label="place-token-and-pass"
        >
          No Thanks!
        </button>
        <button
          className="take-card-and-tokens"
          onClick={moves.takeCardAndTokens}
          aria-label="take-card-and-tokens"
        >
          Take the card and tokens
        </button>
      </div>
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
