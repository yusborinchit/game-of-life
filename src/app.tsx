import { useEffect, useState } from "react";
import { clone } from "./utils/clone";
import { BOARD_HEIGHT, BOARD_WIDTH, DEAD_CELL, LIVE_CELL } from "./utils/const";
import countNeighbors from "./utils/count-neighbors";

const EMPTY_BOARD = Array.from({ length: BOARD_HEIGHT }).map(() =>
  Array.from({ length: BOARD_WIDTH }).map(() => DEAD_CELL)
);

export default function App() {
  const [board, setBoard] = useState(EMPTY_BOARD);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!play) return;

    const interval = setInterval(() => {
      setBoard((oldBoard) => {
        const draft = clone(oldBoard);

        for (let i = 0; i < BOARD_HEIGHT; i++) {
          for (let j = 0; j < BOARD_WIDTH; j++) {
            const cell = oldBoard[i][j];
            const neighbors = countNeighbors(oldBoard, i, j);

            if (cell === LIVE_CELL) {
              if (neighbors > 3 || neighbors <= 1) draft[i][j] = DEAD_CELL;
              if (neighbors === 2 || neighbors === 3) draft[i][j] = LIVE_CELL;
            }

            if (cell === DEAD_CELL && neighbors === 3) draft[i][j] = LIVE_CELL;
          }
        }

        return draft;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [play]);

  return (
    <main className="max-w-[400px] p-4 mx-auto flex flex-col gap-2">
      <div
        style={{ "--columns": BOARD_WIDTH } as React.CSSProperties}
        className="grid grid-cols-[repeat(var(--columns),6px)] mx-auto w-fit border border-zinc-900"
      >
        {board.map((row, i) => {
          return row.map((cell, j) => (
            <div
              key={`${i}${j}`}
              onClick={() => {
                const draft = clone(board);

                const currentCell = draft[i][j];
                draft[i][j] = currentCell === DEAD_CELL ? LIVE_CELL : DEAD_CELL;

                setBoard(draft);
              }}
              className={`aspect-square grid place-items-center ${
                cell === DEAD_CELL ? "bg-zinc-50" : "bg-zinc-900 text-zinc-50"
              }`}
            ></div>
          ));
        })}
      </div>
      <button
        onClick={() => {
          setPlay((oldPlay) => !oldPlay);
        }}
        className="px-4 py-2 mx-auto text-sm font-bold uppercase rounded w-fit bg-zinc-900 text-zinc-50"
      >
        {play ? "Pause" : "Play"}
      </button>
    </main>
  );
}
