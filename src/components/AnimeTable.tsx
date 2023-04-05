import { IAnimeCard } from '../interfaces/IAnimeCard';
import AnimeCard from '../components/AnimeCard';

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
                        Episodes
                    </th>
                </tr>
            </thead>
            <tbody className=''>
                {/* {animes.map((anime) => <tr key={anime.mal_id}>
                    <td className='p-4'>{anime.rank}</td>
                    <td className='p-4'>{anime.title}</td>
                    <td className='p-4'>{anime.type}</td>
                    <td className='p-4'>{anime.year}</td>
                    <td className='p-4'>{anime.episodes}</td>
                </tr>
                )} */}
                {animes.map(anime => 
                    <AnimeCard anime={anime} key={anime.mal_id} />
                )} 
            </tbody>
        </table>
    )
  }

  export default AnimeTable;