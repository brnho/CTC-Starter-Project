import React, { useState } from "react";
import { calculateWinner } from "../calculate_win";
import Board from "./Board";
import Square from "./Square";

const onClick = () => {
  return(null);
}

let currentString = "X"; // why not state var?

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = () => {
    if (
      [0, 1, 2].map((i) => board[i]).join('') === "XXX" ||
      [3, 4, 5].map((i) => board[i]).join('') === "XXX" ||
      [6, 7, 8].map((i) => board[i]).join('') === "XXX" ||
      [0, 3, 6].map((i) => board[i]).join('') === "XXX" ||
      [1, 4, 7].map((i) => board[i]).join('') === "XXX" ||
      [2, 5, 8].map((i) => board[i]).join('') === "XXX" ||
      [0, 4, 8].map((i) => board[i]).join('') === "XXX" ||
      [2, 4, 6].map((i) => board[i]).join('') === "XXX"
    ) {
      return "Winner: X";
    }
    if (
      [0, 1, 2].map((i) => board[i]).join('') === "OOO" ||
      [3, 4, 5].map((i) => board[i]).join('') === "OOO" ||
      [6, 7, 8].map((i) => board[i]).join('') === "OOO" ||
      [0, 3, 6].map((i) => board[i]).join('') === "OOO" ||
      [1, 4, 7].map((i) => board[i]).join('') === "OOO" ||
      [2, 5, 8].map((i) => board[i]).join('') === "OOO" ||
      [0, 4, 8].map((i) => board[i]).join('') === "OOO" ||
      [2, 4, 6].map((i) => board[i]).join('') === "OOO"
    ) {
      return "Winner: O";
    }
    if (!board.includes(null)) {
      return "Tie Game";
    }
    return null;
  };

  const jumpToStart = () => {
    setBoard(Array(9).fill(null));

  };

  const result = () => {
    if (!board.includes(null)) {
      return calculateWinner(board);
    } else {
      return `Next Player: ${currentString}`;
    }
  }
  
  const handleClick = (i) => {
    if (calculateWinner(board) === null) {
      const newBoard = board.map((val, index) => {
        if (i === index) {
          return currentString;
        } else {
          return val;
        }
      });
      currentString = currentString === "X" ? "O" : "X";
      setBoard(newBoard);
    } 
  };

  const squares = board.map((val, i) => (
    <Square value={val} onClick={() => handleClick(i)} />
  )); // array of 9 squares

  return (
    <>
      <h1 className='header'>Tic Tac Toe</h1>
      <Board squares={squares}/>
      <div className='info-wrapper'>
        <div>
          <button className='startButton' onClick={jumpToStart}>Go to Start</button>
        </div>
        <h3>{result()}</h3>
      </div>
    </>
  );
};

export default Game;
