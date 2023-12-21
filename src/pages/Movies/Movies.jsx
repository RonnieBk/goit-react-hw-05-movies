import { useState, useEffect } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import { searchData } from 'api.js';

import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const location = useLocation();
  const from = location.pathname + location.search;

  useEffect(() => {
    if (query === null) return;

    async function getData() {
      try {
        const data = await searchData(query);
        setMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    getData();
  }, [query]);

  function handleSubmit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.input.value;
    setSearchParams({ query });

    form.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={css.input} name="input" />
        <button className={css.btnSubmit} type="submit">
          Search
        </button>
      </form>
      {query && (
        <ul>
          {movies.map(item => (
            <li key={item.id}>
              <Link to={`${item.id}`} state={{ from }}>
                {item.title || item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
