import { IAnimeCard } from '../interfaces/animeInterfaces';
import TableRow from './TableRow';
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

    return (
        <table className='w-10/12 border-collapse border-solid border-2  border-lime-600'>
            <thead>
                <tr className='bg-lime-400'>
                    <th className='p-5'>
                        Rank
                    </th>
                    <th className='p-5'>
                        Title
                    </th>
                    <th className='p-5'>
                        Type
                    </th>
                    <th className='p-5'>
                        Year
                    </th>
                    <th className='p-5'>
                        Genre
                    </th>
                    <th className='p-5'>
                        Episodes
                    </th>
                    <th className='p-5'>
                        Actions
                    </th>
                    <th className='p-5'>
                        Favorites
                    </th>
                </tr>
            </thead>
            <tbody>
                {animes.map(anime => 
                    <TableRow anime={anime} key={anime.mal_id} 
                    isMain={isMain} 
                    deleteFromFavorite={deleteFromFavorite}
                    updateFavorites={updateFavorites}
                    />
                )} 
            </tbody>
        </table>
    )
  }

  export default AnimeTable;