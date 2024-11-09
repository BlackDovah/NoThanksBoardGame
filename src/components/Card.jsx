/* eslint-disable react/prop-types */

export const Card = ({ card, color }) => (
    <div className="card" style={{ backgroundColor: color }}>
      {card}
    </div>
  );

export default Card;
