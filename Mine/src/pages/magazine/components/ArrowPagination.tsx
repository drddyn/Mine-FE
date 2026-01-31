import ArrowIcon from "../../../icon/swipe.svg?react";

interface Props {
  currentPage: number;
  totalPages: number;
  onNext: () => void;
  onPrev: () => void;
}

const HALF_DISTANCE = 600; 

export default function ArrowPagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}: Props) {
  return (
    <>
      {currentPage > 1 && (
        <button
          onClick={onPrev}
          className="absolute top-[49%] left-1/2 -translate-y-1/2 z-20"
          style={{ transform: `translate(-${HALF_DISTANCE}px, -50%)` }}
        >
          <ArrowIcon />
        </button>
      )}

      {currentPage < totalPages && (
        <button
          onClick={onNext}
          className="absolute top-[49%] left-1/2 -translate-y-1/2 z-20"
          style={{ transform: `translate(${HALF_DISTANCE-40}px, -50%)` }}
        >
          <ArrowIcon className="rotate-180" />
        </button>
      )}
    </>
  );
}
