import { IAnimeCard } from '../interfaces/IAnimeCard';
import AnimeCard from '../components/AnimeCard';

function Animelist() {
  return (
    <div className='grid grid-cols-5'>
        {/* {animes.map(anime => <AnimeCard anime={anime} key={anime.mal_id}/>)} */}
    </div>
  );
}

export default Animelist;