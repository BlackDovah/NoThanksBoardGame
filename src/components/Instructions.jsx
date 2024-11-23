import { Link } from "react-router-dom";

export const Instructions = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-green-400 border-white border-8 p-8 rounded-lg text-black font-bold text-shadow-custom">
      <h1>How to Play No Thanks</h1>
      <p>
        <strong>Objective:</strong> Avoid points by strategically declining
        cards. The player with the fewest points wins.
      </p>
      <ol>
        <li>
          <strong>1-</strong>Players take turns deciding whether to take the
          card or pass.
        </li>
        <li>
          <strong>2-</strong>If you pass, you must place one of your tokens on
          the card.
        </li>
        <li>
          <strong>3-</strong>If you take the card, you collect all tokens on it.
        </li>
        <li>
          <strong>4-</strong>The game ends when all cards have been taken.
        </li>
      </ol>
      <p>Good luck and have fun!</p>
      <Link to="/">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Game
        </button>
      </Link>
    </div>
  );
};
