// import React from "react";
// import { createRoot } from 'react-dom/client';
import { Client } from 'boardgame.io/react';
import { NoThanks } from './Game.js';
import { NoThanksBoard } from './Board';
// import { SocketIO } from 'boardgame.io/multiplayer'


const NoThanksClient = Client({
  game: NoThanks,
  numPlayers: 4,
  board: NoThanksBoard,
  // multiplayer: SocketIO({ server: 'localhost:8000' }),
})

// class App extends React.Component {
//   state = { playerID: null };

//   render() {
//     if (this.state.playerID === null) {
//       return (
//         <div>
//           <p>Play as</p>
//           <button onClick={() => this.setState({ playerID: "0" })}>
//             Player 0
//           </button>
//           <button onClick={() => this.setState({ playerID: "1" })}>
//             Player 1
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

// const root = createRoot(document.getElementById("root"));
// root.render(<App tab="home" />);

export default NoThanksClient;