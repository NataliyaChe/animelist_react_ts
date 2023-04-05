import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className='h-[100px] flex justify-between px-8 bg-red-400 items-center text-white'>
        <span className='font-bold text-4xl'>Animelist</span>
        <span>
            <Link to='/' className='mr-6 font-bold text-2xl'>Anime</Link>
            <Link to='/about' className='font-bold text-2xl'>About</Link>
        </span>
    </nav>
  );
}