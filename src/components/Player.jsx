/* eslint-disable react/prop-types */
import { Card } from "./Card";

export const Player = ({ playerID, tokens, cards, color }) => {
  return (
    <div className={`player player-${playerID} border-white border-2`}>
      Player{playerID} - Tokens: {tokens} - Cards: {cards.length}
      <div className="held-cards">
        {cards.map((card, index) => (
          <Card key={index} card={card} color={color} />
        ))}
      </div>
    </div>
  );
};
