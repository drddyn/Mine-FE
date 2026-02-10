import React from 'react'
import { GRID_LAYOUT_PRESETS } from '../../../style/gridpattern'

export const GridContainor = ({ children }: { children: React.ReactNode }) => {
    const childrenArray = React.Children.toArray(children)
    const count = childrenArray.length
    const layoutPattern = GRID_LAYOUT_PRESETS[count]
    return (
        <div className="w-full h-full grid grid-cols-4 gap-2 grid-flow-dense">
            {React.Children.map(children, (child, index) => (
                <div className={layoutPattern[index] || 'col-span-1'}>{child}</div>
            ))}
        </div>
    )
}
