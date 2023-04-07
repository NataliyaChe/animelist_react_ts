import { IAnimeCard, IGenre } from './animeInterfaces';

export interface IAnimesResponse {
    data: IAnimeCard[]
    pagination: {
      last_visible_page: number
    }
  }

  export interface IGenresResponse {
    data: IGenre[]
  }