interface CellProps {
  isAlive: boolean;
  handleToggleCell: () => void;
}

export default function Cell({ isAlive, handleToggleCell }: CellProps) {
  return (
    <div
      onClick={handleToggleCell}
      className={`aspect-square grid border place-items-center ${
        isAlive ? "bg-zinc-900 border-zinc-900 text-zinc-50" : "bg-zinc-50"
      }`}
    />
  );
}
