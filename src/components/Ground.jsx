/* eslint-disable react/prop-types */

export const Ground = ({ G, currentColor }) => {
  return (
    <div className="card-container col-start-2 row-start-2 justify-between flex items-center gap-40">
      <div
        className="deck border-white border-2"
        style={{ backgroundColor: currentColor }}
      >
        NoThanks<br></br> Cards left:<br></br> {G.deck.length}
      </div>
      <div
        className="drawnCard border-white border-2"
        style={{ backgroundColor: currentColor }}
      >
        Card: {G.ground.currentCard}
        <br></br> Tokens: {G.ground.groundTokens}
      </div>
    </div>
  );
};
