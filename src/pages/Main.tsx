import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/IAnimeCard';
import { IAnimesResponse } from '../interfaces/IFetch';
import Pagination from '../components/Pagination';
import {ChangePageData} from '../interfaces/IEvent';
import AnimeTable from '../components/AnimeTable';
import GenreList from '../components/GenreList';
import { IGenre } from '../interfaces/IAnimeCard';
import { IGenresResponse } from '../interfaces/IFetch';

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 25;

  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    const fetchAnimes = async () => {
      const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
      const animes = await data.json() as IAnimesResponse;
      console.log(animes);
      
      setTotalPages(animes.pagination.last_visible_page
        );
      setAnimes(animes.data);
    }
    fetchAnimes()
  }, [currentPage])

  const changePage = (event: ChangePageData) => {
    setCurrentPage(event.selected+1)
  }

  useEffect(() => {
    const fetchGenres = async () => {
      const data = await fetch('https://api.jikan.moe/v4/genres/anime');
      const genresData = await data.json() as IGenresResponse;
      console.log(genresData);
      // setGenres(genresData);
    }
    fetchGenres()
  }, [])
console.log('genres', genres);
  return (
    <div className='p-8'>
      <div className='flex gap-8'>
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

