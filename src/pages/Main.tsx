import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/animeInterfaces';
import Pagination from '../components/Pagination';
import {IPaginationEvent} from '../interfaces/eventInterfases';
import AnimeTable from '../components/Table/AnimeTable';
import GenreList from '../components/GenreList';
import { IGenre } from '../interfaces/animeInterfaces';
import { useApi } from '../hooks/useApi';
import { IDeleteFavoriteEvent } from '../interfaces/eventInterfases';

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { getAnimes, getGenres } = useApi();

  const [genres, setGenres] = useState<IGenre[]>([]);
  const [isMain, setIsMain] = useState<boolean>(true)
  
  useEffect(() => {
    const fetchAnimes = async () => {
      const animes = await getAnimes(currentPage)
      setTotalPages(animes.pagination.last_visible_page
        );
      setAnimes(animes.data);
    }
    fetchAnimes()
  }, [currentPage])

  const changePage = (event: IPaginationEvent) => {
    setCurrentPage(event.selected+1)
  }

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenres()
      setGenres(genres.data);
    }
    fetchGenres()
  }, [])

  const updateFavorites = (event: IDeleteFavoriteEvent) => {
    // const animeId = +event.target.dataset.id;
    console.log('event updateFavorites', event);
  }

  return (
    <div className='p-8'>
      <div className='flex justify-between gap-8'>
        <AnimeTable animes={animes} 
          isMain={isMain}
          updateFavorites={updateFavorites}/>
        <GenreList genres={genres}/>
      </div>
      <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </div>
  );
}

