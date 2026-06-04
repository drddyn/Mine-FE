import Search from '../../icon/search.svg?react'

export default function SearchForLandingPage() {
    return (
        <div className="flex items-center justify-end">
            <div className="flex items-center gap-4 w-72 h-11 px-4 py-5 rounded-[80px] border border-gray-500 transition-opacity duration-200  bg-gray-100-op30">
                <div className="shrink-0 text-gray-100/60 transition-opacity duration-200 opacity-60">
                    <Search className="w-6 h-6 text-gray-100 fill-current" />
                </div>
                <div className="flex-1 bg-transparent outline-none font-regular16 text-gray-100/70 placeholder:text-gray-600-op40">
                    검색어를 입력해주세요.
                </div>
            </div>
        </div>
    )
}
