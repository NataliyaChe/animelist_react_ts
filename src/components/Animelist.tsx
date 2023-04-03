import React from 'react';
import { IAnimeCard } from '../interfaces/IAnimeCard';
import AnimeCard from '../components/AnimeCard';

interface AnimelistProps {
  animes: IAnimeCard[]
}

function Animelist({animes}: AnimelistProps) {
  return (
    <div className='grid grid-cols-5'>
        {animes.map(anime => {
          return <AnimeCard anime={anime} key={anime.mal_id} />
        }
      )}    
    </div>
  );
}

export default Animelist;