import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Instructions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleReload = () => {
      navigate("/instructions");
    };

    // Add event listener for page reload
    window.addEventListener("load", handleReload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("load", handleReload);
    };
  }, [navigate]);

  return (
    <div
      className="xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-x-1/2 
    xl:-translate-y-1/2 text-start bg-green-400 border-white border-8 p-8 
    rounded-lg text-black"
    >
      <h1 className="text-center text-xl">
        <strong>Game Objective</strong>
      </h1>
      <p className="text-center">
        Have the lowest score at the end of the game.
      </p>
      <br></br>
      <ol>
        <li>
          <strong>1-</strong>Players take turns deciding whether to take the
          card or pass.
        </li>
        <li>
          <strong>2-</strong>If you pass, you must place one of your tokens on
          the card.
          <br></br>
          If you have no tokens, you will automatically take the card and all
          tokens on it.
        </li>
        <li>
          <strong>3-</strong>If you take the card, you collect all tokens on it.
        </li>
        <li>
          <strong>4-</strong>The game ends when all cards have been taken.
        </li>
      </ol>
      <br></br>
      <h1 className="text-xl">
        <strong>Score Calculation</strong>
      </h1>
      <ol>
        <strong>1-</strong>At the end of the game, the values of your cards will
        be added together, and your remaining tokens will be subtracted from the
        total score.
        <br></br>
        <strong>2-</strong>For cards that are in series, e.g: 30, 31, 32, only
        the first card in the series will be added to the total score when
        adding the card values together.
      </ol>
      <br></br>
      <h1 className="text-xl">
        <strong>Tips</strong>
      </h1>
      <ol>
        <li>
          <strong>1-</strong>It’s a good idea to try to hold onto tokens – they
          help your score at the end of the game and they keep you from taking
          cards you don’t want to take when you run out of tokens.
        </li>
        <li>
          <strong>2-</strong>If a card that you need for a series has a high
          number, you may want to let it go around a few times before you take
          it so that the other players put tokens onto it before you take it.
          <br></br>
          Even if one of the other players takes it, s/he may be adding a lot of
          points to his/her score (which helps you).
        </li>
        <li>
          <strong>3-</strong>Pay attention to which players are running low on
          tokens – they may be forced to take a card that you want when they run
          out.
        </li>
      </ol>
      <br></br>
      <p className="text-center">
        <strong>And remember, DON'T LOSE 0_0!</strong>
      </p>
      <div className="text-center">
        <Link to="/">
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Game
          </button>
        </Link>
      </div>
    </div>
  );
};
