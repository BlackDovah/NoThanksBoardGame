/* eslint-disable react/prop-types */
import { Card } from "./Card";

export const Player = ({ playerID, tokens, cards, color }) => {
  return (
      <div className={`player-${playerID} bg-gray-800 border-white flex items-center justify-center border-2 text-lg relative p-4 rounded-lg`}>
        <div className="text-center xsm:text-xs">
          Player{playerID}&nbsp;-&nbsp;Tokens:&nbsp;{tokens}&nbsp;-&nbsp;Cards:&nbsp;{cards.length}
        </div>
        <div className="held-cards">
          {cards.map((card, index) => (
            <Card key={index} card={card} color={color} />
          ))}
        </div>
      </div>
  );
};
