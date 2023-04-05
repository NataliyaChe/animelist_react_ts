import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/IAnimeCard';
import { IAnimesResponse } from '../interfaces/IFetch';
import Pagination from '../components/Pagination';
import {ChangePageData} from '../interfaces/IEvent';
import AnimeTable from '../components/AnimeTable';

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 25;

  useEffect(() => {
    const fetchAnimes = async () => {
      const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
      const animes = await data.json() as IAnimesResponse;
      setTotalPages(animes.pagination.last_visible_page
        );
      setAnimes(animes.data);
    }
    fetchAnimes()
  }, [currentPage])

  const changePage = (event: ChangePageData) => {
    setCurrentPage(event.selected+1)
  }

  return (
    <div className='p-8'>
      <AnimeTable animes={animes}/>
      <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </div>
  );
}

