import type { User } from './user'

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

type BaseMagazine = {
    magazineId: number
    title: string
    subtitle: string
    introduction: string
    coverImageUrl: string
    createdAt: string
}

//목록 조회를 위한 타입
export type Magazine = BaseMagazine & {
    username: string
    likeCount: number
    commentCount: number
}

export type ResponseMyMagazine = PageResponse<Magazine>

export type ResponseMagazineDetail = BaseMagazine & {
    tags: string
    moodboardImageUrl: string
    moodboardDescription: string
    createdAt: string
    user: User
    sections: Section[]
    likeCount: number
    // version: number
}

type Paragraph = {
    paragraphId: number
    section: string
    subtitle: string
    text: string
    imageUrl: string
    displayOrder: 0
}
type Section = {
    sectionId: number
    heading: string
    thumbnailUrl: string
    paragraphs: Paragraph[]
    imageUrl: string
    layoutType: string
    layoutHint: string
    displayOrder: number
    magazineId: number
    magazineTitle: string
    viewedAt: string
}

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

export type ResponseRecentSection = Section[]

export type SectionDetailDto = BaseSection

type BaseSection = {
    magazineId: number
    sectionId: number
}
export type DeleteSectionDto = BaseSection

export type ResponseGetSectionDetail = {
    sectionId: number
    heading: string
    paragraphs: Paragraph[]
    thumnbnail_url: string
    layout_type: string
    layout_hint: string
    caption: string
    display_order: number
    magazineId: number
    magazineTitle: string
    viewedAt: string
    likeCount: number
    isLiked: boolean
}

export type DeleteParagraphDto = BaseSection & {
    paragraphId: number
}

export type FeedDto = {
    cursorId?: number | null
    limit?: number
}

export type ResponseFeed = {
    content: Magazine[]
    nextCursor: number
    hasNext: boolean
}

export type RequestAddSection = {
    magazineId: number
    message: string
}

export type RequestAddSectionInSectionPage = {
    magazineId: number
    sectionId: number
    message: string
}
export type ResponseAddSection = {
    message: string
    actionType: string
    section: {
        heading: string
        paragraphs: Paragraph[]
        sectionId: number
        thumbnailUrl: string
        layoutType: string
        layoutHint: string
        displayOrder: number
    }
}

export type ResponseAddSectionInSectionPage = ResponseAddSection
