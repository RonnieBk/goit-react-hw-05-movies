import { Link } from 'react-router-dom';
import css from './MoviesDetails.module.css';

const base_url = 'https://image.tmdb.org/t/p/w200';

export const MovieDetails = ({ movie }) => {
  console.log('firstmv', movie);
  return (
    <div className={css.wrapper}>
      <button className={css.btn}>
        <img
          className={css.arrow}
          width="12"
          height="12"
          src="https://img.icons8.com/material-sharp/24/left.png"
          alt="left"
        />
        Go back
      </button>
      <div className={css.movieDetails}>
        <img src={base_url + movie.poster_path} alt={movie.name} />
        <div className={css.info}>
          <h2 className={css.title}>{movie.name || movie.title}</h2>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
        </div>
      </div>
      <div className={css.additionalInfo}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="/cast">Cast</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
