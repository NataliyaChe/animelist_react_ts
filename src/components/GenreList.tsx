import { useState, useEffect } from 'react';
import { IGenre } from '../interfaces/IAnimeCard';
import { IGenresResponse } from '../interfaces/IFetch';

interface GenrelistProps {
    genres: IGenre[]
  }

function GenreList({genres}: GenrelistProps) {

  return (
    <div className='p-8 bg-lime-400'>
        {/* {genres.map(genre => {
            return <p key={genre.mal_id}>{genre.name}</p>
        }
        )} */}
    </div>
  );
}

export default GenreList