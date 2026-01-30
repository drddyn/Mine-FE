export default function ExploreItem() {
  return (
    <div
      className="
        relative
        w-[362px]
        h-[240px]
        bg-gray-300
        overflow-hidden
        cursor-pointer
      "
    >
      {/* 썸네일 placeholder */}
      <div className="absolute inset-0 bg-gray-400" />

      {/* 제목 영역 */}
      <div
        className="
          absolute
          bottom-4
          right-4
          w-[202px]
          h-[32px]
          flex
          items-end
        "
      >
        <p
          className="
            w-full
            font-[MaruBuri]
            font-semibold
            text-[24px]
            leading-[1]
            tracking-[-0.025em]
            text-white
            text-right
          "
        >
          매거진 제목
        </p>
      </div>
    </div>
  )
}
