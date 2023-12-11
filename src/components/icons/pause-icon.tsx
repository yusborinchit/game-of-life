export default function PauseIcon({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 18 24"
    >
      <path
        fill="currentColor"
        d="M4.801 23.999h-3.6a1.202 1.202 0 0 1-1.2-1.2v-21.6c0-.663.537-1.2 1.2-1.201h3.6a1.202 1.202 0 0 1 1.2 1.2v21.6c0 .663-.537 1.2-1.2 1.201zm11.999 0h-3.6a1.2 1.2 0 0 1-1.2-1.2V1.198a1.2 1.2 0 0 1 1.2-1.2h3.6a1.2 1.2 0 0 1 1.2 1.2v21.6a1.2 1.2 0 0 1-1.2 1.2z"
      />
    </svg>
  );
}
