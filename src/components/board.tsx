import { type CSSProperties } from "react";
import { LIVE_CELL } from "../const/";
import { type MatrixCoords } from "../types";
import Cell from "./cell";

interface BoardProps {
  columns: number;
  rows: number;
  board: number[][];
  handleToggleCell: (position: MatrixCoords) => void;
}

export default function Board({
  columns,
  rows,
  board,
  handleToggleCell,
}: BoardProps) {
  return (
    <section
      style={
        {
          "--cell-width": "6px",
          "--columns": columns,
          "--rows": rows,
        } as CSSProperties
      }
      className="grid grid-cols-[repeat(var(--columns),var(--cell-width))] grid-rows-[repeat(var(--rows),var(--cell-width))]  border border-zinc-900"
    >
      {board.map((row, i) =>
        row.map((cell, j) => (
          <Cell
            key={`${i}-${j}`}
            isAlive={cell === LIVE_CELL}
            handleToggleCell={() => handleToggleCell({ i, j })}
          />
        ))
      )}
    </section>
  );
}
