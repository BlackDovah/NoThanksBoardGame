import React from "react";
import { Client } from "boardgame.io/react";
import { NoThanks } from "./Game.js";
import { NoThanksBoard } from "./Board";
import { SocketIO } from "boardgame.io/multiplayer";
import "./output.css";

const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 4,
  board: NoThanksBoard,
  multiplayer: SocketIO({ server: "localhost:8000" }),
});

class App extends React.Component {
  state = { playerID: null };

  render() {
    if (this.state.playerID === null) {
      return (
        <div className="board text-6xl">
          <p className="col-start-2 row-start-1 justify-self-center self-start">
            Choose your seat :
          </p>
          <button
            className="border-white bg-black p-3 col-start-1 row-start-1 justify-self-center self-center"
            onClick={() => this.setState({ playerID: "0" })}
          >
            Player 0 (Red)
          </button>
          <button
            className="border-white bg-black p-3 col-start-1 row-start-2 justify-self-center self-center"
            onClick={() => this.setState({ playerID: "1" })}
          >
            Player 1 (Green)
          </button>
          <button
            className="border-white bg-black p-3 col-start-3 row-start-1 justify-self-center self-center"
            onClick={() => this.setState({ playerID: "2" })}
          >
            Player 2 (Blue)
          </button>
          <button
            className="border-white bg-black p-3 col-start-2 row-start-1 justify-self-center self-center"
            onClick={() => this.setState({ playerID: "3" })}
          >
            Player 3 (Yellow)
          </button>
        </div>
      );
    }
    return (
      <div>
        <NoThanksClient playerID={this.state.playerID} />
      </div>
    );
  }
}

export default App;
