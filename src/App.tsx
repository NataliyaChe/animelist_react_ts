import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { About } from './pages/AboutPage';
import { Navigation } from './components/Navigation';
import { SingleAnime } from './pages/SingleAnimePage';
import { Favorites } from './pages/Favorites'

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/:mal_id' element={<SingleAnime />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
