export type AuthorizationDto = {
    username: string
    password: string
}

export type ResponseAuthorization = {
    accessToken: string
    tokenType: 'Bearer'
    refreshToken: string
    expiresIn: number
}

export type SignupDto = {
    username: string
    email: string
    password: string
    nickname: string
    interests: string[]
}

export type MyMagazinesDto = {
    page: number
    size: number
    sort: string[]
}

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
