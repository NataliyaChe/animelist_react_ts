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


  
  const getAnimesByGenres = (event: any) => {
    console.log('genre');
    
  }
  return (
      <div className='p-8'>
        <div className='grid grid-cols-[30%_60%] gap-y-14 mb-6 text-lime-900'>
          <img 
            src={singleAnime?.images.webp.large_image_url} 
            className='p-5 border-2 border-solid border-lime-600 max-w-[400px] '/>
          <div className=''>
            <h2 
              className='text-3xl font-bold pb-6 text-lime-900'>
              {singleAnime?.title}
            </h2>
            <p 
              className='text-xl font-bold pb-4 text-lime-900'>
              Type: 
              <span 
                className='text-xl font-semibold pb-4 text-lime-900 ml-6'>{singleAnime?.type}
              </span>
            </p>
            <p 
              className='text-xl font-bold pb-4 text-lime-900'>
              Year: 
              <span 
                className='text-xl font-semibold pb-4 text-lime-900 ml-6'>{singleAnime?.year}
              </span>
            </p>
            <p 
              className='text-xl font-bold pb-4 text-lime-900'>
              Episodes: 
              <span 
                className='text-xl font-semibold pb-4 text-lime-900 ml-6'>{singleAnime?.episodes}
              </span>
            </p>
          </div>
          <div>
            <h3 
              className='text-2xl font-bold pb-4 text-lime-900'>
              Genres: 
            </h3>
            {singleAnime?.genres.map(genre =>
            <p 
              className='bg-lime-400 px-3 pt-1 pb-2 rounded-md font-semibold w-40 mb-2 hover:bg-lime-100 text-lg'
              key={genre.mal_id}
              onClick={getAnimesByGenres}>
              {genre.name}
            </p>)
          }  
          </div>
          <p 
            className='text-xl p-5'>
            {singleAnime?.synopsis}
          </p>  
        </div>  
      </div>
  );
}
