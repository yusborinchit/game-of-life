import Board from "./components/board";
import { BOARD_COLUMNS, BOARD_ROWS } from "./const/";
import { useBoard } from "./hooks/useBoard";

export default function App() {
  const { board, isRunning, toggleCell, toggleRunning } = useBoard();

  return (
    <main className="max-w-[400px] p-4 mx-auto flex flex-col gap-2">
      <Board
        columns={BOARD_COLUMNS}
        rows={BOARD_ROWS}
        board={board}
        handleToggleCell={toggleCell}
      />
      <button
        onClick={toggleRunning}
        className="px-4 py-2 mx-auto text-sm font-bold uppercase rounded w-fit bg-zinc-900 text-zinc-50"
      >
        {isRunning ? "Pause" : "Play"}
      </button>
    </main>
  );
}
