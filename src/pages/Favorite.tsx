import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/animeInterfaces';
import Pagination from '../components/Pagination';
import {IPaginationEvent} from '../interfaces/eventInterfases';
import AnimeTable from '../components/Table/AnimeTable';
import { IFavoriteEvent } from '../interfaces/eventInterfases';
import { useApi } from '../hooks/useApi';

export function Favorite() {
  const [favoriteAnimes, setFavoriteAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const { getFavorites, deleteFromFavorites } = useApi();
  const itemsPerPage = 25;
  const [firstItem, setFirstItem] = useState(0);
  const lastItem = firstItem + itemsPerPage;

  useEffect(() => {
    const fetchFavorite = async () => {
      const favoriteAnimes = await getFavorites()
      setFavoriteAnimes(favoriteAnimes)
      setTotalPages(Math.ceil(favoriteAnimes.length / itemsPerPage))
    }
    fetchFavorite()
  }, [])

  const paginatedFavorites = favoriteAnimes.slice(firstItem, lastItem);
  const changePage = (event: IPaginationEvent) => {
    setFirstItem(event.selected * itemsPerPage)
  }

  const deleteFromFavorite = (event: IFavoriteEvent) => {
    const animeId = +event.target.dataset.id;
    const deletedAnime: any = favoriteAnimes.find(favoriteAnime => favoriteAnime.mal_id === animeId);
    console.log('updateFavorites', deletedAnime);
    const filteredAnimes = favoriteAnimes.filter(favoriteAnime => {
        return favoriteAnime.mal_id !== animeId;
    })
    setFavoriteAnimes(filteredAnimes);
    deleteFromFavorites(deletedAnime.id)
  }

  return (
    <div className='p-8'>
      <AnimeTable 
        animes={favoriteAnimes.length > 25 ? paginatedFavorites : favoriteAnimes} 
        deleteFromFavorite={deleteFromFavorite}/>
      <Pagination 
        changePage={changePage} 
        totalPages={totalPages}
    />
    </div>
  );
}