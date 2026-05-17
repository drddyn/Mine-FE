import type {
    DeleteParagraphDto,
    DeleteSectionDto,
    FeedDto,
    PatchMagazineTitleDto,
    PatchSectionDto,
    PostMagazineDto,
    RequestAddSection,
    RequestAddSectionInSectionPage,
    RequestDeleteMagazine,
    ResponseAddSection,
    ResponseAddSectionInSectionPage,
    ResponseFeed,
    ResponseRecentSection,
    SearchLikedMagazinePageParams,
    SearchMagazineFeed,
    SectionDetailDto,
} from '../types/magazine'
import type { MyMagazinesDto, ResponseMyMagazine } from '../types/magazine'
import { axiosInstance } from './axios'

export const getMyMagazineList = async ({ page, size, sort }: MyMagazinesDto): Promise<ResponseMyMagazine> => {
    const res = await axiosInstance.get(`/api/magazines`, {
        params: { page, size, sort },
    })
    return res.data
}

export const deleteMagazine = async ({ id }: RequestDeleteMagazine) => {
    const res = await axiosInstance.delete(`/api/magazines/${id}`)
    return res.data
}

export const postMagazine = async ({ topic, user_mood }: PostMagazineDto) => {
    const body = {
        topic,
        user_mood,
    }
    const res = await axiosInstance.post('/api/magazines', body)
    return res.data
}

export const patchMagazineTitle = async ({ id, title }: PatchMagazineTitleDto) => {
    const res = await axiosInstance.patch(`/api/magazines/${id}`, { title })
    return res.data
}

export const getRecentSection = async (): Promise<ResponseRecentSection> => {
    const res = await axiosInstance.get(`/api/sections/recent`)
    return res.data
}

export const getSectionDetail = async ({ magazineId, sectionId }: SectionDetailDto) => {
    const res = await axiosInstance.get(`/api/magazines/${magazineId}/sections/${sectionId}`)
    return res.data
}

export const getMagazineDetail = async (magazineId: number) => {
    const res = await axiosInstance.get(`/api/magazines/${magazineId}`)
    return res.data
}

export const getLikedMagazineList = async ({ page, size, sort }: MyMagazinesDto): Promise<ResponseMyMagazine> => {
    const res = await axiosInstance.get(`/api/magazines/liked`, {
        params: { page, size, sort },
    })
    return res.data
}

export const deleteSection = async ({ magazineId, sectionId }: DeleteSectionDto) => {
    const res = await axiosInstance.delete(`/api/magazines/${magazineId}/sections/${sectionId}`)
    return res.data
}

export const postHeart = async (id: number) => {
    const res = await axiosInstance.post(`/api/magazines/${id}/likes`)
    return res.data
}

export const deleteParagraph = async ({ magazineId, sectionId, paragraphId }: DeleteParagraphDto) => {
    const res = await axiosInstance.delete(
        `/api/magazines/${magazineId}/sections/${sectionId}/paragraphs/${paragraphId}`
    )
    return res.data
}

export const getMagazineFeed = async ({ cursorId, limit = 15 }: FeedDto): Promise<ResponseFeed> => {
    const res = await axiosInstance.get(`/api/magazines/feed`, {
        params: { cursorId, limit },
    })
    return res.data
}

export const createMoodboard = async (magazineId: number) => {
    const res = await axiosInstance.post(`/api/magazines/${magazineId}/moodboards`)
    return res.data
}

export const patchMagazineCover = async (id: number, coverImageUrl: string) => {
    const res = await axiosInstance.patch(`/api/magazines/${id}/cover`, { coverImageUrl })
    return res.data
}

export const postAddSection = async ({ magazineId, message }: RequestAddSection): Promise<ResponseAddSection> => {
    const res = await axiosInstance.post(`/api/magazines/${magazineId}/interact`, { message })
    return res.data
}

export const postAddSectionInSectionPage = async ({
    magazineId,
    sectionId,
    message,
}: RequestAddSectionInSectionPage): Promise<ResponseAddSectionInSectionPage> => {
    const res = await axiosInstance.post(`/api/magazines/${magazineId}/sections/${sectionId}/paragraphs/ai`, {
        message,
    })
    return res.data
}

export const patchSection = async ({ magazineId, sectionId, heading, paragraphs }: PatchSectionDto) => {
    const res = await axiosInstance.patch(`/api/magazines/${magazineId}/sections/${sectionId}`, {
        ...(heading !== undefined && { heading }),
        ...(paragraphs !== undefined && { paragraphs }),
    })
    return res.data
}

export const getSearchLikedMagazine = async ({ keyword, page = 0, size = 10 }: SearchLikedMagazinePageParams) => {
    const res = await axiosInstance.get(`api/magazines/liked/search`, {
        params: { keyword, page, size },
    })
    return res.data
}

export const getSearchMagazineFeed = async ({ keyword, page = 0, size = 10 }: SearchMagazineFeed) => {
    const res = await axiosInstance.get(`api/magazines/liked/search`, {
        params: { keyword, page, size },
    })
    return res.data
}
