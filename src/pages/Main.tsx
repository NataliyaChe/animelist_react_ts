import React, { useState, useEffect } from 'react';
import Animelist from '../components/Animelist';
import { IAnimeCard } from '../interfaces/IAnimeCard';
import Pagination from '../components/Pagination';
import {ChangePageData} from '../interfaces/IEvent';
import AnimeTable from '../components/AnimeTable';

interface AnimeData {
  data: IAnimeCard[]
  pagination: {
    last_visible_page: number
  }
}

// export interface ChangePageData {
//   selected: number
// }

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 25;

  useEffect(() => {
    const fetchAnimes = async () => {
      const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
      const animes = await data.json() as AnimeData;
      console.log(animes.pagination);
      
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
      {/* <Animelist animes={animes}/> */}
      <AnimeTable animes={animes}/>
      <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </div>
  );
}

