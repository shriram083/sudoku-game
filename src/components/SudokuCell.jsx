import React from "react";
import styles from "./SudokuCell.module.css";

function SudokuCell({ row, col, value, editable, onChange }) {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10) || null; // Parse the value as an integer
    onChange(row, col, newValue);
  };

  return (
    <input
      className={`${styles.sudokuCell} ${editable ? "editable" : "readonly"}`}
      type="text"
      inputmode="numeric"
      pattern="^[0-9]*$"
      value={value || ""}
      min="1"
      max="9"
      readOnly={!editable}
      onChange={handleChange}
      style={{ backgroundColor: `${!editable ? "antiquewhite" : "white"}` }}
    />
  );
}

export default SudokuCell;
