/* eslint-disable react/prop-types */

export const Card = ({ card, color }) => {
  return (
    <div className="card xsm:text-xs bg-gray-800" style={{ backgroundColor: color }}>
      {card}
    </div>
  );
};
