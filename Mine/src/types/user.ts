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
