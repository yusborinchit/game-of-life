import Board from "../components/board";
import BoardControl from "../components/board-control";
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
    shuffleBoard,
  } = useBoard();

  return (
    <main className="flex flex-col max-w-[400px] gap-4 p-4 mx-auto">
      <header className="flex flex-col gap-2">
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
      </header>

      <section className="flex flex-col gap-1">
        <header className="flex items-center">
          <p className="text-sm">
            <span className="font-bold">Generation:</span> {generation}
          </p>
          <BoardControl
            isRunning={isRunning}
            handleToggleRunning={toggleRunning}
            handleResetBoard={resetBoard}
            handleShuffleBoard={shuffleBoard}
          />
        </header>
        <Board
          columns={BOARD_COLUMNS}
          rows={BOARD_ROWS}
          board={board}
          handleToggleCell={toggleCell}
        />
        <footer>
          <a
            target="_blank"
            href="https://github.com/yusborinchit/game-of-life"
            className="text-sm text-blue-400 underline"
          >
            Github Repository
          </a>
        </footer>
      </section>

      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-bold leading-[1]">The Rules:</h2>
        <p className="text-sm text-zinc-500">
          The universe of the Game of Life is an infinite, two-dimensional
          orthogonal grid of square cells, each of which is in one of two
          possible states, live or dead.
        </p>
        <p className="text-sm text-zinc-500">
          Every cell interacts with its eight neighbours, which are the cells
          that are horizontally, vertically, or diagonally adjacent. At each
          step in time, the following transitions occur:
        </p>

        <ol className="flex flex-col gap-2 pl-4 text-sm text-zinc-500">
          <li className="flex gap-2">
            <span className="font-bold text-zinc-900">#</span>
            <p>
              Any live cell with fewer than two live neighbours dies, as if by
              underpopulation.
            </p>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-zinc-900">#</span>
            <p>
              Any live cell with two or three live neighbours lives on to the
              next generation.
            </p>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-zinc-900">#</span>
            <p>
              Any live cell with more than three live neighbours dies, as if by
              overpopulation.
            </p>
          </li>
          <li className="flex gap-2">
            <span className="font-bold text-zinc-900">#</span>
            <p>
              Any dead cell with exactly three live neighbours becomes a live
              cell, as if by reproduction.
            </p>
          </li>
        </ol>

        <p className="text-sm text-zinc-500">
          The initial pattern constitutes the seed of the system.
        </p>
        <p className="text-sm text-zinc-500">
          The first generation is created by applying the above rules
          simultaneously to every cell in the seed, live or dead; births and
          deaths occur simultaneously, and the discrete moment at which this
          happens is sometimes called a tick.
        </p>
        <p className="text-sm text-zinc-500">
          Each generation is a pure function of the preceding one. The rules
          continue to be applied repeatedly to create further generations
        </p>
      </section>
    </main>
  );
}
