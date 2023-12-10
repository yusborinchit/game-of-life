import { LIVE_CELL } from "./const";

const MOVEMENTS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, -0],
  [1, 1],
];

export default function countNeighbors(
  board: number[][],
  i: number,
  j: number
) {
  let neighbors = 0;

  for (const [x, y] of MOVEMENTS) {
    const newI = i + x;
    const newJ = j + y;

    if (newI < 0 || newI >= board.length) continue;
    if (newJ < 0 || newJ >= board.length) continue;

    const neighbor = board[newI][newJ];

    if (neighbor === LIVE_CELL) neighbors++;
  }

  return neighbors;
}
