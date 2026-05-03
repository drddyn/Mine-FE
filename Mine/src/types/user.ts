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
//내 프로필 조회
export type ResponseProfile = {
    id: number
    username: string
    nickname: string
    email: string
    profileImageUrl: string
    followerCount: number
    followingCount: number
    magazineCount: number
    isPublic: boolean
    interests: string[]
    isFollowing: boolean
}
export type ProfileDto = {
    nickname: string
    username: string
    profileImage: File | null
}
export type UserBase = {
    id: number
    username: string
    nickname: string
    profileImageUrl: string
}

export type User = UserBase & {
    email: string
    followerCount: number
    followingCount: number
    magazineCount: number
    isPublic: boolean
    interests: string[]
    isFollowing: boolean
}
