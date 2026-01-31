export default function ExploreItem() {
  return (
    <div
      className="
        relative w-90.5 h-60 bg-black-textInTheBox overflow-hidden cursor-pointer
      "
    >
      <div className="absolute inset-0 bg-black-textInTheBox" />
      <div className="absolute bottom-4 right-4 w-50.5 h-8 flex items-end">
        <p
          className="w-full font-[MaruBuri] font-semibold24 leading-none text-white text-right"
        >
          매거진 제목
        </p>
      </div>
    </div>
  )
}
