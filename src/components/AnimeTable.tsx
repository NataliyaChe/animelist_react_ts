import { IAnimeCard } from '../interfaces/animeInterfaces';
import TableRow from './TableRow';

interface AnimeTableProps {
  animes: IAnimeCard[]
}

function AnimeTable ({animes}: AnimeTableProps) {

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
                    <TableRow anime={anime} key={anime.mal_id} />
                )} 
            </tbody>
        </table>
    )
  }

  export default AnimeTable;