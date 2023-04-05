import { IAnimeCard } from '../interfaces/IAnimeCard';

interface AnimeProps {
  anime: IAnimeCard
}

function AnimeCard({anime}: AnimeProps) {
  return (
    // <div className='m-5 p-5 border cursor-pointer'>
    //   <img src={anime.images.webp.large_image_url} alt={anime.title} ></img>
    //   <h3 className='mr-6 font-bold text-2xl my-4'>{anime.title}</h3>
    //   <p>{anime.type}</p>
    //   <p>{anime.episodes}</p>
    //   <p>{anime.rating}</p>
    //   <p>{anime.year}</p>
    //   <p>{anime.rank}</p>
    // </div>
    <tr key={anime.mal_id} className='even:bg-lime-50 hover:bg-lime-100 active:hover:bg-lime-200'>
        <td className='p-4 border-solid border-r border-lime-600 w-10 text-lime-900 text-center'>{anime.rank}</td>
        <td className='p-4 border-solid border-x border-lime-600 font-bold text-lime-900'>{anime.title}</td>
        <td className='p-4 border-solid border-x border-lime-600 text-lime-900 text-center'>{anime.type}</td>
        <td className='p-4 w-16 border-solid border-x border-lime-600 text-lime-900'>{anime.year}</td>
        <td className='p-4 w-16 text-lime-900 text-center'>{anime.episodes}</td>
    </tr>
  );
}

export default AnimeCard;