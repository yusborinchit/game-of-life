import { type PropsWithChildren } from "react";

interface IconButtonProps extends PropsWithChildren {
  handleClick: () => void;
}

export default function IconButton({ handleClick, children }: IconButtonProps) {
  return (
    <button
      onClick={handleClick}
      className="transition-colors hover:text-zinc-900"
    >
      {children}
    </button>
  );
}
