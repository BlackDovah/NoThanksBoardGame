/* eslint-disable react/prop-types */

export const Moves = ({ moves }) => {
  return (
    <div className="flex col-start-2 row-start-3 md:gap-10 mt-32 items-center justify-between xsm:text-xs">
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
