import { IGenre } from '../interfaces/animeInterfaces';

interface GenrelistProps {
    genres: IGenre[]
  }

function GenreList({genres}: GenrelistProps) {

  return (
    <div className='bg-lime-100 w-60'>
        <div className='bg-lime-400 py-5 px-6 font-bold'>Genres:</div>
        {genres.map(genre => {
            return <p 
                    className='py-1 px-6 text-lime-900 font-semibold border-2 border-lime-100 hover:bg-lime-50 hover:border-lime-600'
                    key={genre.mal_id}>
                    {genre.name}
                </p>
        }
        )}
    </div>
  );
}

export default GenreList