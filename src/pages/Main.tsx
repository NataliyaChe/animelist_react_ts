import React, { useState, useEffect } from 'react';
import Animelist from '../components/Animelist';
import AnimeCard from '../components/AnimeCard';
import { IAnimeCard } from '../interfaces/IAnimeCard';
import Pagination from '../components/Pagination'

interface AnimeData {
  data: IAnimeCard[]
  pagination: {
    // current_page: number
    items: {
      // count: number
      // per_page: number
      total: number
    }
  }
}

export function Main() {
  const [animes, setAnimes] = useState<IAnimeCard[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const animesPerPage = 25;

  useEffect(() => {
    const fetchAnimes = async () => {
      const data = await fetch(`https://api.jikan.moe/v4/top/anime?limit=${animesPerPage}&page=${currentPage}`);
      const animes = await data.json() as AnimeData;
      // const animes = await data.json();
      // console.log(animes);
      setTotalPages(animes.pagination.items.total);
      setAnimes(animes.data);
    }
    fetchAnimes()
  }, [[currentPage]])

  // const changePage = (event: React.MouseEvent<number>) => {
  // const changePage = (event: React.BaseSyntheticEvent) => {
  const changePage = (event: any) => {
    console.log('event', event);
    
    setCurrentPage(event.selected+1)
  }
  // }

  // function clickOnItem(name) {
  //   console.log('name', name)
  // }

  return (
    <>
      {/* <div className='grid grid-cols-5'>
        {animes.map(anime => <AnimeCard anime={anime} key={anime.mal_id}/>)}
      </div> */}
      <button onClick={changePage} >Test</button>
      <Animelist animes={animes}/>
      <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </>
  );
}

