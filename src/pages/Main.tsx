import { useState, useEffect } from 'react';
import { IAnimeCard, IGenre } from '../interfaces/animeInterfaces';
import Pagination from '../components/Pagination';
import {IPaginationEvent} from '../interfaces/eventInterfases';
import AnimeTable from '../components/Table/AnimeTable';
import GenreList from '../components/GenreList';
import { useApi } from '../hooks/useApi';
import { IFavoriteEvent } from '../interfaces/eventInterfases';

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { getAnimes, getGenres, addToFavorites, getFavorites } = useApi();
  const [favoriteAnimes, setFavoriteAnimes] = useState<IAnimeCard[]>([]);

  const [genres, setGenres] = useState<IGenre[]>([]);
  
  useEffect(() => {
    const fetchAnimes = async () => {
      const animes = await getAnimes(currentPage)
      setTotalPages(animes.pagination.last_visible_page
        );
      setAnimes(animes.data);
    }
    const fetchGenres = async () => {
      const genres = await getGenres()
      setGenres(genres.data);
    }
    const fetchFavorite = async () => {
      const favoriteAnimes = await getFavorites()
      setFavoriteAnimes(favoriteAnimes)
    }
    fetchAnimes();
    fetchFavorite();
    fetchGenres();
  }, [currentPage])

  const changePage = (event: IPaginationEvent) => {
    setCurrentPage(event.selected+1)
  }

  // useEffect(() => {
  //   const fetchGenres = async () => {
  //     const genres = await getGenres()
  //     setGenres(genres.data);
  //   }
  //   fetchGenres()
  // }, [])

  function updateFavorites(event: IFavoriteEvent) {
    const animeId = +event.target.dataset.id;
    if(!favoriteAnimes.find(anime => anime.mal_id === animeId))  {
      const targetAnime: any = animes.find(anime => anime.mal_id === animeId);
      const favoriteAnime: IAnimeCard  = {
        "id": targetAnime.mal_id,
        "mal_id": targetAnime.mal_id,
        "title": targetAnime.title,
        "genres": targetAnime.genres,
        "type": targetAnime.type,
        "year": targetAnime.year,
        "episodes": targetAnime.episodes,
        "images": targetAnime.images,
        "rank": targetAnime.rank,
        "synopsis": targetAnime.synopsis
      }
      addToFavorites(favoriteAnime);
      setFavoriteAnimes([...favoriteAnimes, favoriteAnime])
    } 
  }

  return (
    <div className='p-8'>
      <div className='flex justify-between gap-8'>
        <AnimeTable animes={animes} 
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

