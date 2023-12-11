import IconButton from "./icon-button";
import PauseIcon from "./icons/pause-icon";
import PlayIcon from "./icons/play-icon";
import ResetIcon from "./icons/reset-icon";
import ShuffleIcon from "./icons/shuffle-icon";

interface BoardControlProps {
  isRunning: boolean;
  handleToggleRunning: () => void;
  handleResetBoard: () => void;
  handleShuffleBoard: () => void;
}

export default function BoardControl({
  isRunning,
  handleToggleRunning,
  handleResetBoard,
  handleShuffleBoard,
}: BoardControlProps) {
  return (
    <div className="flex gap-2 ml-auto text-zinc-400">
      <IconButton handleClick={handleToggleRunning}>
        {isRunning ? (
          <PauseIcon
            width={18}
            height={18}
          />
        ) : (
          <PlayIcon
            width={18}
            height={18}
          />
        )}
      </IconButton>
      <IconButton handleClick={handleResetBoard}>
        <ResetIcon
          width={18}
          height={18}
        />
      </IconButton>
      <IconButton handleClick={handleShuffleBoard}>
        <ShuffleIcon
          width={18}
          height={18}
        />
      </IconButton>
    </div>
  );
}
