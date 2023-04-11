import { IAnimeCard } from '../../interfaces/animeInterfaces';
import TableRow from './TableRow';
import TableHead from './TableHead';
import { useLocation } from 'react-router-dom';

interface AnimeTableProps {
  animes: IAnimeCard[]
  isMain: boolean
  deleteFromFavorite?: any
  updateFavorites?: any
}

function AnimeTable ({animes, isMain, deleteFromFavorite, updateFavorites}: AnimeTableProps) {
    const location = useLocation();
    console.log('location table', location);

const action = () => {
    if(location.pathname === "/favorite") {
        deleteFromFavorite()
    } else {
        updateFavorites()
    }
} 

    return (
        <table className='w-10/12 border-collapse border-solid border-2  border-lime-600'>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {animes.map(anime => 
                    <TableRow anime={anime} key={anime.mal_id} 
                    isMain={isMain}
                    action={action}
                    />
                )} 
            </tbody>
        </table>
    )
  }

  export default AnimeTable;