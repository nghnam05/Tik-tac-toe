import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const GameBoard = () => {
  const [boards, setBoards] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(true);
  const [winner, setWinner] = useState(null);

  const WinnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getWinnerPlayer = (square) => {
    for (let combination of WinnerCombinations) {
      const [a, b, c] = combination;
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

  const handleCliked = (index) => {
    if (boards[index] || winner) return;
    const newBoards = [...boards];
    newBoards[index] = nextPlayer ? "X" : "O";
    setBoards(newBoards);
    setNextPlayer(!nextPlayer);
  };

  const GameStatus = () => {
    if (winner) return `🎉 Winner: ${winner}`;
    if (boards.every((square) => square !== null)) return "🤝 It's a draw!";
    return `🕹️ Next Player: ${nextPlayer ? "X" : "O"}`;
  };

  const newGame = () => {
    setBoards(Array(9).fill(null));
    setNextPlayer(true);
    setWinner(null);
  };

  useEffect(() => {
    const result = getWinnerPlayer(boards);
    if (result && !winner) {
      setWinner(result);
      toast.success(`🎉 Player ${result} wins!`);
    }
  }, [boards, winner]);

  return (
    <div className="w-full max-w-[480px] mx-auto sm:mt-8 mt-10 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 mb-6">
        <span className="text-white text-xl sm:text-2xl font-medium">
          🎮 Game Status:
        </span>
        <h2 className="text-amber-400 text-xl sm:text-xl font-bold">
          {GameStatus()}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-[6px] bg-white p-[6px] rounded-xl aspect-square">
        {boards.map((item, index) => (
          <button
            key={index}
            onClick={() => handleCliked(index)}
            className="bg-gray-900 h-28 text-white text-4xl font-bold rounded-md flex items-center justify-center hover:bg-gray-700 transition-all duration-200"
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={newGame}
        className="mt-6 w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:scale-105 transition-transform"
      >
        🔁 New Game
      </button>
    </div>
  );
};

export default GameBoard;
