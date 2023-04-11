import { IAnimesResponse, IGenresResponse } from '../interfaces/responseInterfaces';
import { IAnimeCard } from "../interfaces/animeInterfaces";


export const useApi = () => {
  async function getAnimes(currentPage: number) {
    const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=25&page=${currentPage}`);
    return await data.json() as IAnimesResponse;
  }

  async function getGenres() {
    const data = await fetch('https://api.jikan.moe/v4/genres/anime');
    return await data.json() as IGenresResponse
  }

  async function getSingleAnime(animeId: number) {
    const data = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
    return await data.json() 
  }

  async function getFavorites() {
    const data = await fetch('http://localhost:3004/favorites');
    return await data.json() as IAnimeCard[];
  }

  async function addToFavorites(favoriteAnime: IAnimeCard) {
    fetch('http://localhost:3004/favorites', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(favoriteAnime)
    })
  }

  function deleteFromFavorites(animeId: number) {
    fetch(`http://localhost:3004/favorites/${animeId}`, {
        method: 'DELETE'
    })
  }

return { getAnimes, getGenres, getSingleAnime, getFavorites, addToFavorites, deleteFromFavorites }   
}