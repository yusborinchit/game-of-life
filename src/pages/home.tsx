import Board from "../components/board";
import PauseIcon from "../components/icons/pause-icon";
import PlayIcon from "../components/icons/play-icon";
import ResetIcon from "../components/icons/reset-icon";
import ShuffleIcon from "../components/icons/shuffle-icon";
import { BOARD_COLUMNS, BOARD_ROWS } from "../config";
import { useBoard } from "../hooks/useBoard";

export default function HomePage() {
  const {
    board,
    generation,
    isRunning,
    toggleCell,
    toggleRunning,
    resetBoard,
    randomizeBoard,
  } = useBoard();

  return (
    <main className="flex flex-col max-w-[400px] gap-4 p-4 mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-black uppercase leading-[1]">
          The Game of Life
        </h1>
        <p className="text-sm text-zinc-500">
          This is a simulation of the 'Game of Life' made in{" "}
          <a
            target="_blank"
            href="https://react.dev/"
            className="text-blue-400 underline"
          >
            React.js
          </a>
          {" + "}
          <a
            target="_blank"
            href="https://www.typescriptlang.org/"
            className="text-blue-400 underline"
          >
            Typescript
          </a>
          .
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <p className="text-sm">
            <span className="font-bold">Generation:</span> {generation}
          </p>
          <div className="flex gap-2 ml-auto text-zinc-400">
            <button
              onClick={toggleRunning}
              className="transition-colors hover:text-zinc-900"
            >
              {isRunning ? (
                <PauseIcon
                  width={22}
                  height={22}
                />
              ) : (
                <PlayIcon
                  width={22}
                  height={22}
                />
              )}
            </button>
            <button
              onClick={resetBoard}
              className="transition-colors hover:text-zinc-900"
            >
              <ResetIcon
                width={22}
                height={22}
              />
            </button>
            <button
              onClick={randomizeBoard}
              className="transition-colors hover:text-zinc-900"
            >
              <ShuffleIcon
                width={22}
                height={22}
              />
            </button>
          </div>
        </div>
        <Board
          columns={BOARD_COLUMNS}
          rows={BOARD_ROWS}
          board={board}
          handleToggleCell={toggleCell}
        />
      </div>
    </main>
  );
}
