import rfdc from "rfdc";
import { DEAD_CELL, LIVE_CELL } from "../const/";
import { type Matrix, type MatrixCoords } from "../types";

export function createMatrix({
  columns,
  rows,
}: {
  columns: number;
  rows: number;
}): Matrix {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: columns }).map(() => DEAD_CELL)
  );
}

export function cloneMatrix({ matrix }: { matrix: Matrix }) {
  const clone = rfdc();
  return clone(matrix);
}

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

export function countCellNeighbors({
  matrix,
  position,
}: {
  matrix: Matrix;
  position: MatrixCoords;
}) {
  const { i, j } = position;
  let neighbors = 0;

  for (const [x, y] of MOVEMENTS) {
    const newI = i + x;
    const newJ = j + y;

    if (newI < 0 || newI >= matrix.length) continue;
    if (newJ < 0 || newJ >= matrix.length) continue;

    const neighbor = matrix[newI][newJ];

    if (neighbor === LIVE_CELL) neighbors++;
  }

  return neighbors;
}
