import { IAnimeCard } from '../interfaces/IAnimeCard';
import {useNavigate} from 'react-router-dom';

interface AnimeProps {
  anime: IAnimeCard
}

function TableRow({anime}: AnimeProps) {
  const genres = anime.genres.map(genre => genre.name).join(', ');
  let navigate = useNavigate();

  const openAnime = (event: any) => {
    console.log(`open ${anime.title}`);
    navigate(`https://api.jikan.moe/v4/anime/${anime.mal_id}`)
  }

  return (
    <tr key={anime.mal_id} 
        className='even:bg-lime-50 hover:bg-lime-100 active:hover:bg-lime-200'>
        <td 
          className='p-4 border-solid border-r border-lime-600 w-10 text-lime-900 text-center'>
          {anime.rank}
        </td>
        <td 
          className='p-4 border-solid border-x border-lime-600 font-bold text-lime-900'>
          {anime.title}
        </td>
        <td 
          className='p-4 border-solid border-x border-lime-600 text-lime-900 text-center'>
          {anime.type}
        </td>
        <td 
          className='p-4 w-16 border-solid border-x border-lime-600 text-lime-900'>
          {anime.year}
        </td>
        <td 
          className='p-4 border-solid border-x border-lime-600 text-lime-900 text-center'>
          {genres}
        </td>
        <td 
          className='p-4 w-16 text-lime-900 text-center border-solid border-x border-lime-600 '>
          {anime.episodes}
        </td>
        <td className='p-4 w-16 text-lime-900 text-center'>
          <button 
            className='bg-lime-400 px-3 pt-1 pb-2 rounded-md font-semibold'
            onClick={() => navigate(`/${anime.mal_id}`)}>
            Open
          </button>
        </td>
    </tr>
  );
}

export default TableRow;