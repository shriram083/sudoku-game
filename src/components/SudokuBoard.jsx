import React from "react";
import SudokuCell from "./SudokuCell"; // Assuming you have a SudokuCell component

function SudokuBoard({ board, onCellChange }) {
  return (
    <div className="sudoku-board">
      {board.map((row, rowIndex) => (
        <div className="sudoku-row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <SudokuCell
              key={colIndex}
              row={rowIndex}
              col={colIndex}
              value={cell}
              editable={cell === null}
              onChange={onCellChange}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SudokuBoard;
