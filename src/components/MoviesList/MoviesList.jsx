import { Link } from 'react-router-dom';

export const MoviesList = ({ movies, location }) => {
  return (
    <ul>
      {movies.map(item => (
        <li key={item.id}>
          <Link to={`movies/${item.id}`} state={{ from: location }}>
            {item.title || item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
