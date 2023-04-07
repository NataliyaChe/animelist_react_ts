import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/animeInterfaces';
// import Pagination from '../components/Pagination';
// import {IPaganationEvent} from '../interfaces/IPaganationEvent';
import AnimeTable from '../components/AnimeTable';
import { IDeleteFavoriteEvent } from '../interfaces/eventInterfases';

export function Favorite() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  // const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMain, setIsMain] = useState<boolean>(false)

  useEffect(() => {
    const fetchFavorite = async () => {
      const data = await fetch('http://localhost:3004/favorites?limit=${animesPerPage}&page=${currentPage}');
      const animes = await data.json() as IAnimeCard[];
      setAnimes(animes)
    }
    fetchFavorite()
  }, [currentPage])

  // const changePage = (event: IPaganationEvent) => {
  //   setCurrentPage(event.selected+1)
  // }

  const deleteFromFavorite = (event: IDeleteFavoriteEvent) => {
    const animeId = +event.target.dataset.id;
    const filteredAnimes = animes.filter(anime => {
        return anime.id !== animeId;
    })
    setAnimes(filteredAnimes);
    remove(animeId)
  }

  function remove(animeId: number) {
    fetch(`http://localhost:3004/favorites/${animeId}`, {
        method: 'DELETE'
    })
  }

    return (
      <div className='p-8'>
        <AnimeTable animes={animes} isMain={isMain} deleteFromFavorite={deleteFromFavorite}/>
        {/* <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      /> */}
      </div>
    );
  }