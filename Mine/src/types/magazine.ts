import type { UserBase } from './user'

export type PageResponse<T> = {
    totalPages: number
    totalElements: number
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

type Moodboard = {
    imageUrl: string
    description: string
    status: 'COMPLETED'
}

type BaseMagazine = {
    title: string
    coverImageUrl: string
    createdAt: string
    moodboard: Moodboard
}

//목록 조회를 위한 타입
export type Magazine = BaseMagazine & {
    magazineId: number
    username: string
    likeCount: number
    commentCount: number
}
//내 매거진 리스트 조회 응답 , 내가 찜한 매거진 리스트 응답
export type ResponseMyMagazine = PageResponse<Magazine>

//매거진 상세 보기 응답
export type ResponseMagazineDetail = BaseMagazine & {
    user: UserBase
    tags: string[]
    moodboard: Moodboard
    sections: Section[]
    likeCount: number
    isLiked: boolean
}

type Paragraph = {
    paragraphId: number
    subtitle: string
    text: string
    imageUrl: string
    sourceUrl: string
}
type Section = {
    heading: string
    thumbnailUrl: string
    paragraphs: Paragraph[]
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
//최근 열람 섹션 응답
export type ResponseRecentSection = RecentSection[]

export type SectionDetailDto = BaseSection

type BaseSection = {
    magazineId: number
    sectionId: number
}
export type DeleteSectionDto = BaseSection
//섹션 상세 보기 응답
export type ResponseGetSectionDetail = {
    heading: string
    paragraphs: Paragraph[]
    sourceUrl: string
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
