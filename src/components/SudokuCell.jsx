import React from "react";

function SudokuCell({ row, col, value, editable, onChange }) {
  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10) || null; // Parse the value as an integer
    onChange(row, col, newValue);
  };

  return (
    <input
      className={`sudoku-cell ${editable ? "editable" : "readonly"}`}
      type="number"
      value={value || ""}
      min="1"
      max="9"
      readOnly={!editable}
      onChange={handleChange}
      style={{ height: 40 }}
    />
  );
}

export default SudokuCell;
