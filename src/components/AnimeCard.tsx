import { IAnimeCard } from '../interfaces/IAnimeCard';

interface AnimeProps {
  anime: IAnimeCard
}

function AnimeCard({anime}: AnimeProps) {
  return (
    <div className='m-5 p-5 border cursor-pointer'>
      <img src={anime.images.webp.large_image_url} alt={anime.title} ></img>
      <h3 className='mr-6 font-bold text-2xl my-4'>{anime.title}</h3>
      <p>{anime.score}</p>
      <p>{anime.episodes}</p>
      <p>{anime.rating}</p>
      <p>{anime.year}</p>
      <p>{anime.rank}</p>
    </div>
  );
}

export default AnimeCard;