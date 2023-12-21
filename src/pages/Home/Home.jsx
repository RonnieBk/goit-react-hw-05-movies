import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesList } from 'components/MoviesList/MoviesList.jsx';

import { getData } from 'api.js';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const data = async () => {
      try {
        const moviesList = await getData();
        setMovies(moviesList);
      } catch (error) {
        console.log(error.message);
      }
    };

    data();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} location={location} />
    </div>
  );
};

export default Home;
