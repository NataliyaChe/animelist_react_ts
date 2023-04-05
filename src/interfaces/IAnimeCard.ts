export interface IAnimeCard {
    mal_id: number
    title: string
    genres?: []
    type: number
    year: number
    rating: string
    episodes: number
    images: {
        webp: {
            large_image_url: string
        }
    }
    rank: number
}