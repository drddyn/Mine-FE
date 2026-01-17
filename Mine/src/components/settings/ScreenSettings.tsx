import IconWandStars from "../../icon/wand_stars.svg?react";
import IconAddPhoto from "../../icon/add_photo_alternate.svg?react";

export default function ScreenSettings() {
  return (
    <div className="w-136.5 h-36.5 flex gap-6.5">
      <button
        className="
          w-65
          h-full
          rounded-2xl
          border border-lightborder
          bg-white
          flex
          flex-col
          items-center
          justify-center
          gap-3
          text-black-whiteBoxOutline
          transition-colors
          duration-150
          hover:bg-buttonbackgd
          hover:border-boldborder
          hover:text-lightborder
        "
      >
        <IconWandStars className="w-6 h-6 aspect-square **:stroke-current **:fill-current" />
        <span className="font-regular12">
          AI로 무드보드 생성하기
        </span>
      </button>

      <button
        className="
          w-65
          h-full
          rounded-2xl
          border border-lightborder
          bg-white
          flex
          flex-col
          items-center
          justify-center
          gap-3
          text-black-whiteBoxOutline
          transition-colors
          duration-150
          hover:bg-buttonbackgd
          hover:border-boldborder
          hover:text-lightborder
        "
      >
        <IconAddPhoto className="w-6 h-6 aspect-square **:stroke-current **:fill-current" />
        <span className="font-regular12">
          컴퓨터에서 이미지 가져오기
        </span>
      </button>
    </div>
  );
}
