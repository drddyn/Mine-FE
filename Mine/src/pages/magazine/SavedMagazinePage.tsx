import { useState } from "react";
import SavedMagazineItem from "./components/SavedMagazineItem";
import ArrowPagination from "./components/ArrowPagination";
import LLMInputBox from "../../components/LLMInputBox";

const CARD_WIDTH = 476;
const GAP = 16;
const COLUMN_STEP = CARD_WIDTH + GAP; 

export default function SavedMagazinePage() {
  const [columnIndex, setColumnIndex] = useState(0);
  const TOTAL_COLUMNS = 14;

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <div className="relative pt-25 pb-40 px-51.5">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-51.5 z-10" />
          <div className="relative overflow-x-visible overflow-y-visible w-full">
            <div
              className="flex gap-4 transition-transform duration-500 ease-in-out will-change-transform"
              style={{
                transform: `translateX(-${columnIndex * COLUMN_STEP}px)`,
              }}
            >
              {Array.from({ length: TOTAL_COLUMNS }).map((_, colIdx) => (
                <div
                  key={colIdx}
                  className="flex flex-col gap-4 shrink-0"
                >
                  <SavedMagazineItem />
                  <SavedMagazineItem />
                </div>
              ))}
            </div>
          </div>
        </div>

        <ArrowPagination
          currentPage={columnIndex + 1}
          totalPages={TOTAL_COLUMNS}
          onNext={() =>
            setColumnIndex((prev) =>
              Math.min(prev + 1, TOTAL_COLUMNS - 1)
            )
          }
          onPrev={() =>
            setColumnIndex((prev) => Math.max(prev - 1, 0))
          }
        />
      </div>

      <div
        className="fixed bottom-8 right-73.5 z-20 opacity-70 focus-within:opacity-100 transition-opacity duration-300">
        <LLMInputBox />
      </div>
    </div>
  );
}
