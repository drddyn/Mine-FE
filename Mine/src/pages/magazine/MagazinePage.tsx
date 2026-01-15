import { useState } from 'react'
import SectionCover from './components/SectionCover'
import SectionPage from './SectionPage'

type PageDepth = 'main' | 'section'
export default function MagazinePage() {
    const [depth, setDepth] = useState<PageDepth>('main')
    return (
        <>
            {depth === 'main' && (
                <div className="flex justify-center items-start gap-4 mt-30">
                    <div className="flex flex-col gap-4">
                        <SectionCover size="w-55 h-27.5" onclick={() => setDepth('section')} />
                        <SectionCover size="w-55 h-50" />
                        <SectionCover size="w-55 h-40" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <SectionCover size="w-85 h-60.5" />
                            <SectionCover size="w-60 h-60.5" />
                        </div>
                        <div className="flex gap-4">
                            <SectionCover size="w-60 h-60.5" />
                            <SectionCover size="w-85 h-60.5" />
                        </div>
                    </div>
                    <div className="flex flex-col w-55 gap-4">
                        <SectionCover size="h-27.5" />
                        <SectionCover size="h-50" />
                        <SectionCover size="h-[158px]" />
                    </div>
                </div>
            )}
            {depth === 'section' && <SectionPage />}
        </>
    )
}
