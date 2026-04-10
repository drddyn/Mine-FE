export const GRID_ITEM_LAYOUT_PRESETS: Record<number, string[]> = {
    1: ['col-span-1 row-span-1'], // 1개일 때: 전체 꽉 차게
    2: ['col-span-1 row-span-1', 'col-span-1 row-span-1'], // 2개일 때: 반반
    3: ['col-span-3 row-span-1', 'col-span-2 row-span-1', 'col-span-3 row-span-1'],
    4: ['col-span-3 row-span-1', 'col-span-2 row-span-1', 'col-span-2 row-span-1', 'col-span-3 row-span-1'],
    5: [
        'col-span-13 row-span-1',
        'col-span-13 row-span-1',
        'col-span-8 row-span-1',
        'col-span-8 row-span-1',
        'col-span-10 row-span-1',
    ],
    6: [
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
        'col-span-6 row-span-1',
        'col-span-6 row-span-1',
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
    ],
    7: [
        'col-span-5 row-span-1',
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
        'col-span-4 row-span-1',
        'col-span-6 row-span-1',
        'col-span-6 row-span-1',
        'col-span-6 row-span-1',
    ],
    8: [
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
        'col-span-4 row-span-1',
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
        'col-span-5 row-span-1',
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
    ],
    9: [
        'col-span-4 row-span-5',
        'col-span-6 row-span-10',
        'col-span-4 row-span-10',
        'col-span-4 row-span-10',
        'col-span-4 row-span-8',
        'col-span-4 row-span-10',
        'col-span-4 row-span-10',
        'col-span-6 row-span-10',
        'col-span-4 row-span-7',
    ],
    10: [
        'col-span-4 row-span-5',
        'col-span-6 row-span-10',
        'col-span-4 row-span-10',
        'col-span-4 row-span-7',
        'col-span-4 row-span-8',
        'col-span-4 row-span-10',

        'col-span-6 row-span-10',
        'col-span-4 row-span-8',

        'col-span-4 row-span-7',
        'col-span-4 row-span-5',
    ],
}

export const GRID_LAYOUT_PRESENT: Record<number, string> = {
    1: 'max-w-276 max-h-68.5 grid-cols-1',
    2: 'max-w-276 max-h-68.5 grid-cols-2 grid-rows-1',
    3: 'max-w-276 max-h-68.5 grid-cols-8',
    4: 'max-w-152 max-h-123 grid-cols-5 grid-rows-2',
    5: 'max-w-194 max-h-123 grid-cols-26 grid-rows-2',
    6: 'max-w-226 max-h-123 grid-cols-15 grid-rows-2',
    7: 'max-w-271 max-h-123 grid-cols-18 grid-rows-2',
    8: 'max-w-271 max-h-123 grid-cols-18 grid-rows-2',
    9: 'max-w-276 max-h-123 grid-cols-18 grid-rows-20',
    10: 'max-w-276 max-h-123 grid-cols-18 grid-rows-20',
}
