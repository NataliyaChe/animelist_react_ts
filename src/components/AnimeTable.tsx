import { IAnimeCard } from '../interfaces/IAnimeCard';
import TableRow from './TableRow';

interface AnimelistProps {
  animes: IAnimeCard[]
}

function AnimeTable ({animes}: AnimelistProps) {

    return (
        <table className='w-9/12 border-collapse border-solid border-2 border-lime-600'>
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