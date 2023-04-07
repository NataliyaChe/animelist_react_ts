import { IAnimesResponse } from '../interfaces/responseInterfaces';
import { IAnimeCard } from "../interfaces/animeInterfaces";


export const useApi = () => {
  const link = 'https://api.jikan.moe/v4/';
  const animesPerPage = 25;

  async function get(currentPage: number, params: string) {
    const data = await fetch(`${link}${params}?limit=${animesPerPage}&page=${currentPage}`);
    return await data.json() as IAnimesResponse;
  }

  async function getItem(params: number) {
    const data = await fetch(`${link}anime/${params}`);
    return await data.json() 
  }

return { get, getItem }   
}