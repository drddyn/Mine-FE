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
