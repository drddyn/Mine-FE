export const GRID_LAYOUT_PRESETS: Record<number, string[]> = {
    1: ['col-span-4 row-span-2'], // 1개일 때: 전체 꽉 차게
    2: ['col-span-2 row-span-2', 'col-span-2 row-span-2'], // 2개일 때: 반반
    3: [
        'col-span-2 row-span-2', // 메인 (큰 칸)
        'col-span-2 row-span-1',
        'col-span-2 row-span-1',
    ],
    4: ['col-span-1 row-span-2', 'col-span-1 row-span-1', 'col-span-1 row-span-1', 'col-span-2 row-span-1'],
    // ... 이런 식으로 10개 내외까지 프리셋 설정
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
}
