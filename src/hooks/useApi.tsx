import { IAnimesResponse } from '../interfaces/responseInterfaces';

export const useApi = () => {
  const link = 'https://api.jikan.moe/v4/';
  const animesPerPage = 25;

  async function get(currentPage: number, params: string) {
    const data = await fetch(`${link}${params}?limit=${animesPerPage}&page=${currentPage}`);
    
    
      return await data.json() as IAnimesResponse;
  }

return { get }   
}