/* eslint-disable react/prop-types */

import Card from './Card';
export const Player = ({ playerID, tokens, cards, color }) => (
    <div className={`player player-${playerID}`}>
      Player{playerID} - Tokens: {tokens} - Cards: {cards.length}
      <div className="held-cards">
        {cards.map((card, index) => (
          <Card key={index} card={card} color={color} />
        ))}
      </div>
    </div>
  );
  