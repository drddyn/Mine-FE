interface ChipProps {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function Chip({ title, isActive, onClick }: ChipProps) {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer h-12 px-5 flex items-center justify-center
        rounded-3xl font-semibold20 transition-all duration-150 border border-[1px]
        ${
          isActive
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white/50 hover:bg-white/15"
        }
      `}
    >
      {title}
    </div>
  );
}