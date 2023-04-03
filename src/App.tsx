import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/Main';
import { About } from './pages/AboutPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
    </>
  );
}

export default App;
