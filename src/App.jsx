// import React from "react";
import { Client } from "boardgame.io/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NoThanks } from "./Game.js";
import { NoThanksBoard } from "./Board";
import { Instructions } from "./components/Instructions"; 
// import { SocketIO } from "boardgame.io/multiplayer";
import "./output.css";

// const { protocol, hostname, port } = window.location;
// const server = "https://no-thanks-board-game.vercel.app/";

const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 4,
  board: NoThanksBoard,
  // multiplayer: SocketIO({ server }),
});

// class App extends React.Component {
//   state = { playerID: null };

//   render() {
//     if (this.state.playerID === null) {
//       return (
//         <div className="board text-6xl">
//           <p className="col-start-2 row-start-1 justify-self-center self-start">
//             Choose your seat :
//           </p>
//           <button
//             className="border-white bg-black p-3 col-start-1 row-start-1 justify-self-center self-center"
//             onClick={() => this.setState({ playerID: "0" })}
//           >
//             Player 0 (Red)
//           </button>
//           <button
//             className="border-white bg-black p-3 col-start-1 row-start-2 justify-self-center self-center"
//             onClick={() => this.setState({ playerID: "1" })}
//           >
//             Player 1 (Green)
//           </button>
//           <button
//             className="border-white bg-black p-3 col-start-3 row-start-1 justify-self-center self-center"
//             onClick={() => this.setState({ playerID: "2" })}
//           >
//             Player 2 (Blue)
//           </button>
//           <button
//             className="border-white bg-black p-3 col-start-2 row-start-1 justify-self-center self-center"
//             onClick={() => this.setState({ playerID: "3" })}
//           >
//             Player 3 (Yellow)
//           </button>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <NoThanksClient playerID={this.state.playerID} />
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoThanksClient />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </Router>
  );
}

export default App;
