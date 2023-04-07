export interface IGenre {
    mal_id: number
    name: string
}

export interface IAnimeCard {
    id?: number
    mal_id: number
    title: string
    genres: [
        IGenre
    ]
    type: string
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