import { IAnimeCard, IGenre } from './animeInterfaces';

export interface IAnimesResponse {
    data: IAnimeCard[]
    pagination: {
      // items: {
      //   count: number
      //   per_page: number
      //   total: number
      // }
      last_visible_page: number
    }
  }

  export interface IGenresResponse {
    data: IGenre[]
  }