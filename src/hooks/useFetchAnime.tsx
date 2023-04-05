import { useState, useEffect } from 'react';
import { IAnimeCard } from '../interfaces/IAnimeCard';

interface AnimeData {
    data: IAnimeCard[]
    pagination: {
      last_visible_page: number
    }
  }

export function useFetchAnimes() {
    const [animes, setAnimes] = useState<IAnimeCard[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const animesPerPage = 25;

    
}