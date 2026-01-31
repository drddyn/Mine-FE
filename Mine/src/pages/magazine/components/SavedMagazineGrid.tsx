import SavedMagazineItem from "./SavedMagazineItem";

interface Props {
  itemsPerPage: number;
  currentPage: number;
}

const TOTAL_ITEMS = 100;

export default function SavedMagazineGrid({
  itemsPerPage,
  currentPage,
}: Props) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  return (
    <div className="grid grid-cols-[476px_476px_476px] gap-4">
      {Array.from({ length: TOTAL_ITEMS })
        .slice(start, end)
        .map((_, idx) => (
          <SavedMagazineItem key={idx} />
        ))}
    </div>
  );
}
