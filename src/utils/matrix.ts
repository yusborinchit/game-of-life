import rfdc from "rfdc";
import { CELL_MOVEMENTS, DEAD_CELL, LIVE_CELL } from "../config";
import { type Matrix, type MatrixCoords } from "../types";

export function createMatrix({
  columns,
  rows,
}: {
  columns: number;
  rows: number;
}) {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: columns }).map(() => DEAD_CELL)
  );
}

export function createRandomMatrix({
  columns,
  rows,
}: {
  columns: number;
  rows: number;
}) {
  return Array.from({ length: rows }).map(() =>
    Array.from({ length: columns }).map(() =>
      Math.random() > 0.78 ? LIVE_CELL : DEAD_CELL
    )
  );
}

export function cloneMatrix({ matrix }: { matrix: Matrix }) {
  const clone = rfdc();
  return clone(matrix);
}

export function countCellNeighbors({
  matrix,
  position,
}: {
  matrix: Matrix;
  position: MatrixCoords;
}) {
  const { i, j } = position;
  let neighbors = 0;

  for (const [x, y] of CELL_MOVEMENTS) {
    const newI = i + x;
    const newJ = j + y;

    if (newI < 0 || newI >= matrix.length) continue;
    if (newJ < 0 || newJ >= matrix.length) continue;

    const neighbor = matrix[newI][newJ];

    if (neighbor === LIVE_CELL) neighbors++;
  }

  return neighbors;
}
