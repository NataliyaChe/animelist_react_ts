import { IAnimeCard } from './IAnimeCard';

export interface IAnimesResponse {
    data: IAnimeCard[]
    pagination: {
      last_visible_page: number
    }
  }