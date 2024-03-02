import React, { useState } from "react";
import SudokuBoard from "./SudokuBoard";

const initialBoard = [
  [5, 3, null, null, 7, null, null, null, null],
  [6, null, null, 1, 9, 5, null, null, null],
  [null, 9, 8, null, null, null, null, 6, null],
  [8, null, null, null, 6, null, null, null, 3],
  [4, null, null, 8, null, 3, null, null, 1],
  [7, null, null, null, 2, null, null, null, 6],
  [null, 6, null, null, null, null, 2, 8, null],
  [null, null, null, 4, 1, 9, null, null, 5],
  [null, null, null, null, 8, null, null, 7, 9],
];

function SudokuGame() {
  const [board, setBoard] = useState(initialBoard);

  const handleCellChange = (row, col, value) => {
    const newBoard = board.map((el, i) => {
      if (i === row) {
        let cur = el.map((ele, ind) => {
          if (ind === col) {
            return value;
          }
          return ele;
        });
        return cur;
      }
      return el;
    });

    setBoard(newBoard);
  };

  const handleReset = () => {
    setBoard(initialBoard);
  };

  const handleCheck = () => {
    const isValid = (arr) => {
      const seen = new Set();
      for (let num of arr) {
        if (num == null) {
          return false;
        }
        if (num !== null && seen.has(num)) {
          return false;
        }
        seen.add(num);
      }
      return true;
    };

    const getColumn = (colIndex) => {
      return board.map((row) => row[colIndex]);
    };

    const getSubgrid = (startRow, startCol) => {
      const subgrid = [];
      for (let i = startRow; i < startRow + 3; i++) {
        for (let j = startCol; j < startCol + 3; j++) {
          subgrid.push(board[i][j]);
        }
      }
      return subgrid;
    };

    for (let i = 0; i < 9; i++) {
      if (!isValid(board[i])) {
        alert("Oops! The Sudoku puzzle is not yet solved. Keep trying!");
        return false;
      }
      if (!isValid(getColumn(i))) {
        alert("Oops! The Sudoku puzzle is not yet solved. Keep trying!");
        return false;
      }
    }

    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        if (!isValid(getSubgrid(i, j))) {
          alert("Oops! The Sudoku puzzle is not yet solved. Keep trying!");
          return false;
        }
      }
    }

    alert("Congratulations! You've solved the Sudoku puzzle!");
  };

  return (
    <div className="sudoku-game">
      <h1>Sudoku Game</h1>
      <SudokuBoard board={board} onCellChange={handleCellChange} />
      <div className="sudoku-controls">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleCheck}>Check</button>
      </div>
    </div>
  );
}

export default SudokuGame;
