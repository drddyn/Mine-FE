export const isValidUrl = (url?: string) => {
    if (!url) return false
    try {
        const parsed = new URL(url)
        return parsed.protocol === 'https:'
    } catch {
        return false
    }
}