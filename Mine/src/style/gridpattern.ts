export const GRID_ITEM_LAYOUT_PRESETS: Record<number, string[]> = {
    1: ['col-span-2 row-span-4'], // 1개일 때: 전체 꽉 차게
    2: ['col-span-2 row-span-2', 'col-span-2 row-span-2'], // 2개일 때: 반반
    3: ['col-span-2 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1'],
    4: ['col-span-2 row-span-1', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1'],
    5: [
        'col-span-10 row-span-1',
        'col-span-9 row-span-1',
        'col-span-6 row-span-1',
        'col-span-6 row-span-1',
        'col-span-7 row-span-1',
    ],
    6: [
        'col-span-4 row-span-1',
        'col-span-3 row-span-1',
        'col-span-5 row-span-1',
        'col-span-5 row-span-1',
        'col-span-4 row-span-1',
        'col-span-3 row-span-1',
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
        'col-span-9 row-span-1',
        'col-span-8 row-span-1',
        'col-span-8 row-span-1',
        'col-span-9 row-span-1',
        'col-span-8 row-span-1',
        'col-span-9 row-span-1',
        'col-span-9 row-span-1',
        'col-span-8 row-span-1',
    ],
    9: [
        'col-span-2 row-span-5',
        'col-span-3 row-span-9',
        'col-span-2 row-span-9',
        'col-span-2 row-span-9',
        'col-span-2 row-span-7',
        'col-span-2 row-span-9',
        'col-span-2 row-span-9',
        'col-span-3 row-span-9',
        'col-span-2 row-span-6',
    ],
    10: [
        'col-span-2 row-span-5',
        'col-span-3 row-span-9',
        'col-span-2 row-span-9',
        'col-span-2 row-span-6',
        'col-span-2 row-span-7',
        'col-span-2 row-span-7',

        'col-span-2 row-span-9',
        'col-span-3 row-span-9',

        'col-span-2 row-span-6',
        'col-span-2 row-span-5',
    ],
}

export const GRID_LAYOUT_PRESENT: Record<number, string> = {
    1: 'grid-col-1',
    2: 'grid-col-1',
    3: 'grid-cols-5',
    4: 'grid-cols-3 grid-rows-2',
    5: 'grid-cols-19 grid-rows-2',
    6: 'grid-cols-12 grid-rows-2',
    7: 'grid-cols-18 grid-rows-2',
    8: 'grid-cols-34 grid-rows-2',
    9: 'grid-cols-9 grid-rows-18',
    10: 'grid-cols-9 grid-rows-18',
}
