import { IAnimeCard } from '../../interfaces/animeInterfaces';
import TableRow from './TableRow';
import TableHead from './TableHead';

interface AnimeTableProps {
    animes: IAnimeCard[]
    action: (event: React.MouseEvent<HTMLButtonElement>)=>void
}

function AnimeTable ({animes, action}: AnimeTableProps) {

    return (
        <table className='w-10/12 border-collapse border-solid border-2  border-lime-600'>
            <thead>
                <TableHead />
            </thead>
            <tbody>
                {animes.map(anime => 
                    <TableRow anime={anime} key={anime.mal_id} 
                    action={action}
                    />
                )} 
            </tbody>
        </table>
    )
  }

  export default AnimeTable;