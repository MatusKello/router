import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/MainPage';
import Serials from './pages/Serials';
import Movies from './pages/Movies';
import End from './pages/End';
import Error from './pages/Error';

const App = () => {
  return (
    <BrowserRouter>
      <header>Header</header>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/movies' element={<Movies />} />
          <Route path='/serials' element={<Serials />} />
          <Route path='/end' element={<End />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <footer>Footer</footer>
    </BrowserRouter>
  );
};

export default App;
