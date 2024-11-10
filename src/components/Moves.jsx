/* eslint-disable react/prop-types */

export const Moves = ({ moves }) => {
  return (
    <div className="button-container">
      <button
        className="place-token-and-pass border-white bg-black p-3"
        onClick={moves.placeTokenAndPass}
        aria-label="place-token-and-pass"
      >
        No Thanks!
      </button>
      <button
        className="take-card-and-tokens border-white bg-black p-3"
        onClick={moves.takeCardAndTokens}
        aria-label="take-card-and-tokens"
      >
        Take the card and tokens
      </button>
    </div>
  );
};
