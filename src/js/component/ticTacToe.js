import React, { useState } from "react";
import Board from "./board";

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [playerX, setPlayerX] = useState("");
  const [playerO, setPlayerO] = useState("");
  const [gameStarted, setGameStarted] = useState(false);
  const [weaponX, setWeaponX] = useState(true); // true si X es el jugador 1
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    if (squares[i] || winner) return;
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? (weaponX ? "X" : "O") : weaponX ? "O" : "X";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const renderStatus = () => {
    if (winner) {
      return `Winner: ${winner === "X" ? playerX : playerO}`;
    } else {
      return `Next player: ${xIsNext ? playerX : playerO}`;
    }
  };

  const selectWeapon = (isX) => {
    setWeaponX(isX);
    setPlayerX(isX ? playerX : playerO);
    setPlayerO(isX ? playerO : playerX);
    setGameStarted(true);
  };

  return (
    <div className="game">
      {!gameStarted ? (
        <form className="mb-4">
          <input
            type="text"
            placeholder="jugador 01"
            value={playerX}
            onChange={(e) => setPlayerX(e.target.value)}
            required
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Jugador 02"
            value={playerO}
            onChange={(e) => setPlayerO(e.target.value)}
            required
            className="border p-2 mr-2"
          />
          <div className="mb-2">
            <button
              type="button"
              onClick={() => selectWeapon(true)}
              className={`p-2 ${
                weaponX ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              X
            </button>
            <button
              type="button"
              onClick={() => selectWeapon(false)}
              className={`p-2 ${
                !weaponX ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              O
            </button>
          </div>
        </form>
      ) : (
        <>
          <div className="game-status">{renderStatus()}</div>
          <Board squares={squares} onClick={handleClick} />
        </>
      )}
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default TicTacToe;
