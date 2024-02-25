import "./App.css";
import SudokuGame from "./components/SudokuGame";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku Game</h1>
      </header>
      <main>
        <SudokuGame />
      </main>
    </div>
  );
}

export default App;
