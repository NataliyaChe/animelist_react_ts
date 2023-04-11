import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/animeInterfaces';
import Pagination from '../components/Pagination';
import {IPaginationEvent} from '../interfaces/eventInterfases';
import AnimeTable from '../components/AnimeTable';
import { IDeleteFavoriteEvent } from '../interfaces/eventInterfases';
import { useApi } from '../hooks/useApi';

export function Favorite() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isMain, setIsMain] = useState<boolean>(false);
  const { getFavorites, deleteFromFavorites } = useApi();
  const itemsPerPage = 25;
  const [firstItem, setFirstItem] = useState(0);
  const lastItem = firstItem + itemsPerPage;

  useEffect(() => {
    const fetchFavorite = async () => {
      const animes = await getFavorites()
      setAnimes(animes)
      setTotalPages(Math.ceil(animes.length / itemsPerPage))
    }
    fetchFavorite()
  }, [])

  const paginatedFavorites = animes.slice(firstItem, lastItem);
  const changePage = (event: IPaginationEvent) => {
    setFirstItem(event.selected * itemsPerPage)
  }

  const deleteFromFavorite = (event: IDeleteFavoriteEvent) => {
    const animeId = +event.target.dataset.id;
    const filteredAnimes = animes.filter(anime => {
        return anime.id !== animeId;
    })
    setAnimes(filteredAnimes);
    deleteFromFavorites(animeId)
  }

  return (
    <div className='p-8'>
      <AnimeTable 
        animes={animes.length > 25 ? paginatedFavorites : animes} 
        isMain={isMain} 
        deleteFromFavorite={deleteFromFavorite}/>
      <Pagination 
        changePage={changePage} 
        totalPages={totalPages}
    />
    </div>
  );
}