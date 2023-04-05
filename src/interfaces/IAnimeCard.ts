export interface IGenre {
    mal_id: number
    name: string
    url: string
    count: number
}

export interface IAnimeCard {
    mal_id: number
    title: string
    genres: [
        IGenre
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