import Delete from '../../../icon/delete.svg?react'

interface SectionPartProps {
    sectionDir?: string
    titleDir?: string
    size?: string
}

export default function SectionPart({ sectionDir, titleDir, size }: SectionPartProps) {
    return (
        <section className="group flex w-full h-69.5 items-start gap-10" dir={sectionDir}>
            <div className={`w-57.5 h-full bg-black-image rounded-lg ${size}`}></div>
            <div className="flex flex-col ltr:ml-2.5 rtl:mr-2.5 h-full items-start gap-6 flex-1">
                <div className="flex w-full justify-between items-center " dir={titleDir}>
                    <div className="font-semibold36 font-maruburi text-black-textBigTitle">본문 제목</div>
                    <Delete className="hover:text-black-icon text-transparent" />
                </div>
                <div className="w-full font-regular16 text-black-textMain break-all overflow-hidden" dir="ltr">
                    1줄 본문 내용은 width = fill, height = hug 본문 내용은 width = fill, height = hug 본문 내용은 width
                    = fill, 가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하
                    가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하
                    가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하
                    가나다라마바사아자카타파하 가나다라마바사아자카타파하 가나다라마바사아자카타파하 법률안에 이의가
                    있을 때에는 대통령은 제1항의 기간내에 이의서를 붙여 국회로 환부하고, 그 재의를 요구할 수 있다.
                    국회의 폐회중에도 또한 같다. 선거와 국민투표의 공정한 관리 및 정당에 관한 사무를 처리하기 위하여 ...
                    이미지 크기는 고정(fix), 텍스트는 유동적(hug)! 7줄
                </div>
            </div>
        </section>
    )
}
