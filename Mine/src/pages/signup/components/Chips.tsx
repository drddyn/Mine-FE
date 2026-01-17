import { useState } from 'react'

interface ChipProps {
    title: string
}

export default function Chip({ title }: ChipProps) {
    const [IsChipOn, SetIsChipOn] = useState(false)
    function ChipHandle() {
        SetIsChipOn((prev) => !prev)
    }
    return (
        <div
            className={`flex px-5 py-2.5 justify-center items-center rounded-3xl font-semibold16 hover:bg-main-emphasis hover:text-white ${IsChipOn ? 'bg-main-default text-white' : ' bg-black-whiteBoxOutline text-black-textBigTitle'}`}
            onClick={ChipHandle}
        >
            {title}
        </div>
    )
}
