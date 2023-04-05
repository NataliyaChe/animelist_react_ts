export interface IAnimeCard {
    mal_id: number
    title: string
    genres: [
        {
            mal_id: number
            name: string
        }
    ]
    type: number
    year: number
    episodes: number
    images: {
        webp: {
            large_image_url: string
        }
    }
    rank: number
    synopsis: string
}