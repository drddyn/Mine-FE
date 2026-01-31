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
    profileImageUrl: string
}
