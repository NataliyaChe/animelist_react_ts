import { IAnimeCard, IGenre } from './IAnimeCard';

export interface IAnimesResponse {
    data: IAnimeCard[]
    pagination: {
      last_visible_page: number
    }
  }

  export interface IGenresResponse {
    // data: IGenre[]
    data: any
  }