export type PageResponse<T> = {
    totalPages: number
    totalElements: number
    pageable: {
        pageNumber: number
        pageSize: number
        offset: number
        sort: SortInfo
        paged: boolean
        unpaged: boolean
    }
    size: number
    content: T[]
    number: number
    sort: SortInfo
    numberOfElements: number
    first: boolean
    last: boolean
    empty: boolean
}

type SortInfo = {
    sorted: boolean
    empty: boolean
    unsorted: boolean
}

export type MyMagazinesDto = {
    page: number
    size: number
    sort: string[]
}

type Magazine = {
    id: number
    title: string
    subtitle: string
    introduction: string
    coverImageUrl: string
    username: string
    likeCount: number
    commentCount: number
    createdAt: string
}

export type ResponseMyMagazine = PageResponse<Magazine>

export type RequestDeleteMagazine = {
    id: number
}

export type PostMagazineDto = {
    topic: string
    user_mood: string
}

export type PatchMagazineTitleDto = {
    id: number
    title: string
    introduction: string
}

type Section = {
    id: number
    heading: string
    content: string
    imageUrl: string
    layoutType: string
    layoutHint: string
    caption: string
    displayOrder: number
}

export type ResponseRecentSection = Section[]
