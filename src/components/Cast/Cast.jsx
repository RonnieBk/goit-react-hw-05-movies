import { getMovieInfo } from 'api.js';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w200';
const direction = '/credits';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const info = await getMovieInfo(movieId, direction);
        const castInfo = await info.cast;
        setCast(castInfo);
      } catch (error) {
        console.log(error.message);
      }
    };

    data();
  }, [movieId]);

  return (
    <div>
      <ul>
        {cast.map(actor => (
          <div key={actor.id}>
            <img
              src={actor.profile_path ? BASE_URL + actor.profile_path : ''}
              alt={actor.name}
              style={{ width: '100px' }}
            />
            <li>
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
