import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { IAnimeCard } from '../interfaces/IAnimeCard';

export function SingleAnime() {
  const params = useParams();
  const [singleAnime, setSingleAnime] = useState<IAnimeCard>();
  const genres = singleAnime?.genres.map(genre => genre.name).join(', ');

  useEffect(() => {
      const fetchSingleAnime = async () => {
        const data = await fetch(`https://api.jikan.moe/v4/anime/${params.mal_id}`);
        const singleAnime = await data.json();
        setSingleAnime(singleAnime.data);
      }
      fetchSingleAnime()
    }, []);

  return (
      <div className='p-8'>
        <div className='flex gap-20 mb-6 text-lime-900'>
          <img 
            src={singleAnime?.images.webp.large_image_url} 
            className='p-5 border-2 border-solid border-lime-600 w-[300px]'/>
          <div className='relative'>
            <h2 
              className='text-3xl font-bold pb-6 text-lime-900'>
              {singleAnime?.title}</h2>
            <p 
              className='text-xl font-semibold pb-4 text-lime-900'>
              Type: {singleAnime?.type}</p>
            <p 
              className='text-xl font-semibold pb-4 text-lime-900'>
              Year: {singleAnime?.year}</p>
            <p 
              className='text-xl font-semibold pb-4 text-lime-900'>
              Episodes: {singleAnime?.episodes}</p>
            <p 
              className='text-xl font-semibold pb-4 text-lime-900'>
              Genres: {genres}</p>
          </div>
        </div> 
        <p className='text-xl absolute w-3/5 left-[414px]'>
          {singleAnime?.synopsis}</p>  
      </div>
  );
}
