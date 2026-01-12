import MagazineInfo from './components/MagazineInfo'
import SectionPart from './components/SectionPart'

export default function SectionPage() {
    return (
        <div className="flex bg-black-image   justify-center">
            <div className="flex justify-center w-275 h-full bg-white">
                <div className="flex flex-col w-245 items-center gap-14 mb-60">
                    <MagazineInfo />
                    <SectionPart sectionDir="rtl" titleDir="ltr" />
                    <SectionPart />
                    <SectionPart size="w-[340px] h-[338px]" titleDir="rtl" />
                    <SectionPart sectionDir="rtl" />
                </div>
            </div>
        </div>
    )
}
