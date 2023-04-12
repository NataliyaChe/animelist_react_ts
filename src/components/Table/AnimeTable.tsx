import { IAnimeCard } from '../../interfaces/animeInterfaces';
import TableRow from './TableRow';
import TableHead from './TableHead';
import { useLocation } from 'react-router-dom';

interface AnimeTableProps {
  animes: IAnimeCard[]
  deleteFromFavorite?: any
  updateFavorites?: any
}

function AnimeTable ({animes, deleteFromFavorite, updateFavorites}: AnimeTableProps) {
    const location = useLocation();
    console.log('location table', location);

    return (
        <table className='w-10/12 border-collapse border-solid border-2  border-lime-600'>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {animes.map(anime => 
                    <TableRow anime={anime} key={anime.mal_id} 
                    updateFavorites={updateFavorites}
                    deleteFromFavorite={deleteFromFavorite}
                    />
                )} 
            </tbody>
        </table>
    )
  }

  export default AnimeTable;