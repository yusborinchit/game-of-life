import { useEffect, useState } from "react";
import {
  BOARD_COLUMNS,
  BOARD_ROWS,
  DEAD_CELL,
  GAME_LOOP_TICK,
  LIVE_CELL,
} from "../const";
import { type MatrixCoords } from "../types";
import { cloneMatrix, countCellNeighbors, createMatrix } from "../utils/matrix";

const EMPTY_BOARD = createMatrix({ columns: BOARD_COLUMNS, rows: BOARD_ROWS });

export function useBoard() {
  const [isRunning, setIsRunning] = useState(false);
  const [board, setBoard] = useState(EMPTY_BOARD);

  useEffect(() => {
    if (!isRunning) return;

    const gameLoop = setInterval(() => {
      const draft = cloneMatrix({ matrix: board });

      for (let i = 0; i < BOARD_ROWS; i++) {
        for (let j = 0; j < BOARD_COLUMNS; j++) {
          const cell = board[i][j];
          const isAlive = cell === LIVE_CELL;

          const neighbors = countCellNeighbors({
            matrix: board,
            position: { i, j },
          });

          if (isAlive) {
            if (neighbors > 3 || neighbors <= 1) draft[i][j] = DEAD_CELL;
            if (neighbors === 2 || neighbors === 3) draft[i][j] = LIVE_CELL;
          } else {
            if (neighbors === 3) draft[i][j] = LIVE_CELL;
          }
        }
      }

      setBoard(draft);
    }, GAME_LOOP_TICK);

    return () => clearInterval(gameLoop);
  }, [board, isRunning]);

  const toggleCell = ({ i, j }: MatrixCoords) => {
    const draft = cloneMatrix({ matrix: board });

    const currentCell = draft[i][j];
    draft[i][j] = currentCell === DEAD_CELL ? LIVE_CELL : DEAD_CELL;

    setBoard(draft);
  };

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  return { board, isRunning, toggleCell, toggleRunning };
}