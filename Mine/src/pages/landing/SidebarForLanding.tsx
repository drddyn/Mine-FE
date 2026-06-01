import MineLogo from '../../icon/logo.svg?react'
import SidebarButton from '../../icon/sidebarButton.svg?react'
import Sidebar_new from '../../icon/sidebar_new.svg?react'
import Sidebar_like from '../../icon/sidebar_like.svg?react'
import Sidebar_others from '../../icon/sidebar_others.svg?react'
import Setting from '../../icon/setting.svg?react'
import SidebarBlock from '../../layout/sidebar/SidebarBlock'
import Toggle from '../../icon/toggle.svg?react'

export default function SidebarForLanding({ isOpen }: { isOpen: boolean }) {
    return (
        <>
            {isOpen ? (
                <div className="absolute top-0 left-0 h-screen w-60 pt-8 pb-4 bg-gray-500-op70 z-50 transition-transform ease-in-out duration-300">
                    <div className="flex flex-col h-full gap-6">
                        <div className="flex ml-5 mr-4 items-center justify-between">
                            <MineLogo className="w-21 h-7.5 text-gray-100/50" />
                            <SidebarButton className="cursor-pointer text-gray-100/70 w-5 h-7.5" />
                        </div>
                        <div className="flex flex-col">
                            <SidebarBlock icon={<Sidebar_new />} title="새 매거진" to="" />
                            <SidebarBlock icon={<Sidebar_like />} title="저장한 매거진" to="saved" />
                            <SidebarBlock icon={<Sidebar_others />} title="둘러보기" to="explore" />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex ml-5 my-[6.5px] gap-2 items-center text-gray-300 font-medium12 cursor-pointer">
                                <span className="leading-none">최근에 열람한 섹션</span>
                                <Toggle className="transition-transform rotate-90" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex ml-5 my-[6.5px] gap-2 items-center text-gray-300 font-medium12 cursor-pointer">
                                <span className="leading-none">내 매거진</span>
                                <Toggle className="transition-transform rotate-90" />
                            </div>
                        </div>

                        <div className="flex justify-between mt-auto pl-5 pr-4 pb-0 items-center">
                            <div className="flex gap-2 items-center">
                                <div className="w-7.5 h-7.5 rounded-full bg-gray-100-op70 object-cover"></div>

                                <div className="font-regular16 text-gray-100/70">minelover</div>
                            </div>

                            <Setting className="w-5 h-5 text-gray-100/70" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="absolute top-0 left-0 h-screen z-50">
                    <div
                        className="absolute top-0 left-0 w-15 h-screen flex flex-col justify-between items-center pt-8 pb-4 px-3.75 bg-gray-500-op40 transition-opacity duration-200 ease-in-out 
                "
                    >
                        <div className="flex flex-col items-center gap-6">
                            <MineLogo className="cursor-pointer hover:text-gray-100 text-gray-100-op40 w-5 h-7.5" />
                            <div className="flex flex-col">
                                <div className="flex px-5 py-2  text-gray-100-op40 hover:text-gray-100">
                                    <Sidebar_new />
                                </div>
                                <div className="flex px-5 py-2  text-gray-100-op40 hover:text-gray-100">
                                    <Sidebar_like />
                                </div>
                                <div className="flex px-5 py-2  text-gray-100-op40 hover:text-gray-100">
                                    <Sidebar_others />
                                </div>
                            </div>
                        </div>

                        <div className="w-7.5 h-7.5 rounded-full bg-gray-100-op70 object-cover"></div>
                    </div>
                </div>
            )}
        </>
    )
}
