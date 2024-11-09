/* eslint-disable react/prop-types */

import "./Board.css";

export const NoThanksBoard = ({ G, ctx, moves, reset }) => {
  const playerColor = ["red", "green", "blue", "yellow"];
  const currentColor = playerColor[ctx.currentPlayer];

  let winner = "";
  if (ctx.gameover) {
    winner = ctx.gameover.message;
  }

  return (
    <div className="board">
      <div className="player player-top">
        Player0 - Tokens:{G.hand["0"].tokens} - Cards:{G.hand["0"].cards.length}
        <div className="held-cards">
          {G.hand["0"].cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: playerColor[0] }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="player player-right">
        Player1 - Tokens:{G.hand["1"].tokens} - Cards:{G.hand["1"].cards.length}
        <div className="held-cards">
          {G.hand["1"].cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: playerColor[1] }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="player player-bottom">
        Player2 - Tokens:{G.hand["2"].tokens} - Cards:{G.hand["2"].cards.length}
        <div className="held-cards">
          {G.hand["2"].cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: playerColor[2] }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
      <div className="player player-left">
        Player3 - Tokens:{G.hand["3"].tokens} - Cards:{G.hand["3"].cards.length}
        <div className="held-cards">
          {G.hand["3"].cards.map((card, index) => (
            <div
              key={index}
              className="card"
              style={{ backgroundColor: playerColor[3] }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
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
        >
          No Thanks!
        </button>
        <button
          className="take-card-and-tokens"
          onClick={moves.takeCardAndTokens}
        >
          Take the card and tokens
        </button>
      </div>
      {ctx.gameover && (
        <div className="gameover">
          <div className="winner">{winner} </div>
          <button className="new-game" onClick={reset}>
            Start new game
          </button>
        </div>
      )}
    </div>
  );
};
