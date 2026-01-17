import Vector from '../icon/Vector.svg?react'

interface EmailInputBoxProps {
    id: string
    title?: string
    placeholder?: string
    description?: string
    domains?: string[]
}

export default function EmailInputBox({
    id,
    title,
    placeholder = 'ex) abc123',
    description,
    domains = ['gmail.com', 'naver.com', 'daum.net'],
}: EmailInputBoxProps) {
    return (
        <div className="flex flex-col gap-2">
            {title && <div className="text-black-textSmallTitle font-semibold20">{title}</div>}
            <div className=" w-full h-12 rounded-[15px] border border-black-whiteBoxOutline bg-white flex items-center px-4 gap-4">
                <input
                    id={id}
                    type="text"
                    placeholder={placeholder}
                    className="flex w-47 outline-none font-medium16 placeholder-black-whiteBoxOutline"
                />
                <span className="font-medium16 text-black-icon select-none ">@</span>
                <div className="flex w-full items-center">
                    <select className="appearance-none w-full bg-transparent outline-none font-medium16 text-black-whiteBoxOutline cursor-pointer pr-5">
                        {domains.map((domain) => (
                            <option key={domain} value={domain}>
                                {domain}
                            </option>
                        ))}
                    </select>
                    <Vector className="w-3 h-3 text-black-icon pointer-events-none " />
                </div>
            </div>

            {description && <div className="text-black-textInTheBox font-light14 pl-2.5">{description}</div>}
        </div>
    )
}
