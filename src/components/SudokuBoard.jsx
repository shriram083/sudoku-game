import React from "react";
import SudokuCell from "./SudokuCell"; // Assuming you have a SudokuCell component
import styles from "./SudokuBoard.module.css";

function SudokuBoard({ board, onCellChange }) {
  return (
    <div className={styles.sudokuBoard}>
      {board.map((row, rowIndex) => (
        <div className={styles.sudokuRow} key={rowIndex}>
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
