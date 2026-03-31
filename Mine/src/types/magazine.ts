import type { UserBase } from './user'

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
    user: UserBase
    tags: string[]
    moodboardImageUrl: string
    moodboardDescription: string
    sections: Section[]
    likeCount: number
    isLiked: boolean
}

type Paragraph = {
    paragraphId: number
    subtitle: string
    text: string
    imageUrl: string
}
type Section = {
    sectionId: number
    heading: string
    thumbnailUrl: string
    paragraphs: Paragraph[]
    imageUrl: string
    displayOrder: number
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

type RecentSection = {
    sectionId: number
    heading: string
    displayOrder: number
    magazineId: number
    magazineTitle: string
    viewedAt: string
}

export type ResponseRecentSection = RecentSection[]

export type SectionDetailDto = BaseSection

type BaseSection = {
    magazineId: number
    sectionId: number
}
export type DeleteSectionDto = BaseSection

export type ResponseGetSectionDetail = {
    heading: string
    paragraphs: Paragraph[]
    sectionId: number
    thumbnailUrl: string
    displayOrder: number
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

export type PatchSectionDto = {
    magazineId: number
    sectionId: number
    heading?: string
    paragraphs?: {
        paragraphId: number
        subtitle: string
        text: string
        imageUrl: string
    }[]
}
