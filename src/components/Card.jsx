/* eslint-disable react/prop-types */

export const Card = ({ card, color }) => {
  return (
    <div className="card" style={{ backgroundColor: color }}>
      {card}
    </div>
  );
};
