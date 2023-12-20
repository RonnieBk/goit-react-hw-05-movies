import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import getData from 'api.js';

import { SharedLayout } from './SharedLayout';
import { Home } from '../pages/Home/Home';
import { Movies } from '../pages/Movies/Movies';
import { MovieDetails } from '../pages/MovieDetails/MovieDetails';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const data = async () => {
      try {
        const moviesList = await getData();
        setMovies(moviesList);
        setMovie(moviesList[1]);
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log('finally');
      }
    };

    data();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Route>
    </Routes>
  );
};
