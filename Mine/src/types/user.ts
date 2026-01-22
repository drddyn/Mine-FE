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
