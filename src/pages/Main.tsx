import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/animeInterfaces';
import Pagination from '../components/Pagination';
import {IPaganationEvent} from '../interfaces/IPaganationEvent';
import AnimeTable from '../components/AnimeTable';
import GenreList from '../components/GenreList';
import { IGenre } from '../interfaces/animeInterfaces';
import { IGenresResponse } from '../interfaces/responseInterfaces';
import { useApi } from '../hooks/useApi';

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 25;
  const { get } = useApi()

  const [genres, setGenres] = useState<IGenre[]>([]);
  
  useEffect(() => {
    const params = 'top/anime'
    const fetchAnimes = async () => {
      // const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
      // const animes = await data.json() as IAnimesResponse;
      const animes = await get(currentPage, params)
      setTotalPages(animes.pagination.last_visible_page
        );
      setAnimes(animes.data);
    }
    fetchAnimes()
  }, [currentPage])

  const changePage = (event: IPaganationEvent) => {
    setCurrentPage(event.selected+1)
  }

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await fetch('https://api.jikan.moe/v4/genres/anime');
      const genres = await data.json() as IGenresResponse;
      setGenres(genres.data);
    }
    fetchGenres()
  }, [])

  return (
    <div className='p-8'>
      <div className='flex justify-between gap-8'>
        <AnimeTable animes={animes}/>
        <GenreList genres={genres}/>
      </div>
      <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </div>
  );
}

