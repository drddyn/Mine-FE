import React from 'react'
import { GRID_ITEM_LAYOUT_PRESETS, GRID_LAYOUT_PRESENT } from '../../../style/gridpattern'

export const GridContainor = ({ children }: { children: React.ReactNode }) => {
    const count = React.Children.count(children)
    const itemPattern = GRID_ITEM_LAYOUT_PRESETS[count] || []
    const layoutClass = GRID_LAYOUT_PRESENT[count] || 'grid-cols-4'
    return (
        <div className={`grid w-full h-full gap-2 grid-flow-dense overflow-hidden ${layoutClass}`}>
            {React.Children.map(children, (child, index) => (
                <div key={index} className={`w-full h-full ${itemPattern[index] || 'col-span-1'}`}>
                    {child}
                </div>
            ))}
        </div>
    )
}
