import { IAnimesResponse } from '../interfaces/IFetch';


export const useApi = () => {
  const link = 'https://api.jikan.moe/v4/';
  const animesPerPage = 25;

  async function fetchData({currentPage}: any) {
    const data = await fetch(`${link}top/anime?limit=${animesPerPage}&page=${currentPage}`);
      return await data.json() as IAnimesResponse;
  }

return { fetchData }
    
}