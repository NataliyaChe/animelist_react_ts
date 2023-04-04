import React, { useState, useEffect } from 'react';
import Animelist from '../components/Animelist';
import { IAnimeCard } from '../interfaces/IAnimeCard';
import Pagination from '../components/Pagination';

interface AnimeData {
  data: IAnimeCard[]
  pagination: {
    items: {
      total: number
    }
  }
}

interface ChangePageData {
  selected: number
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
      setTotalPages(animes.pagination.items.total);
      setAnimes(animes.data);
    }
    fetchAnimes()
  }, [currentPage])

  const changePage = (event: ChangePageData) => {
    setCurrentPage(event.selected+1)
  }

  return (
    <>
      <Animelist animes={animes}/>
      <Pagination 
          changePage={changePage} 
          totalPages={totalPages}
      />
    </>
  );
}

