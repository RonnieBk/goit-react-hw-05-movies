import { useState, useEffect, Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { getMovieInfo } from 'api.js';

import css from './MoviesDetails.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const from = location.state?.from;

  useEffect(() => {
    const data = async () => {
      try {
        const movieInfo = await getMovieInfo(movieId);
        const genres = await movieInfo.genres.map(item => item.name);
        const year = movieInfo.release_date.slice(0, 4);
        const vote = Math.round(movieInfo.vote_average * 10);
        movieInfo.genres = genres.join(' ');
        movieInfo.date = year;
        movieInfo.rate = vote;
        setMovie(movieInfo);
      } catch (error) {
        console.log(error.message);
      }
    };

    data();
  }, [movieId]);

  const handleClick = evt => {
    const element = evt.target;
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className={css.wrapper}>
      <Link to={from || '/'} className={css.btn}>
        <img
          className={css.arrow}
          width="12"
          height="12"
          src="https://img.icons8.com/material-sharp/24/left.png"
          alt="left"
        />
        Go back
      </Link>

      <div className={css.movieDetails}>
        <img
          className={css.picture}
          src={movie.poster_path && BASE_URL + movie.poster_path}
          alt={movie.name}
        />
        <div className={css.info}>
          <h2 className={css.title}>
            {movie.name || movie.title} ({movie.date})
          </h2>
          <p>User Score: {movie.rate}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movie.genres}</p>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast" state={{ from }} onClick={handleClick}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }} onClick={handleClick}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
