import { Link } from 'react-router-dom';

export const Home = ({ data }) => {
  return (
    <div>
      <h2>Trending today</h2>
      {/* <ul>
        {data.map(item => (
          <li key={item.id}>
            <Link to={item.backdrop_path}>{item.title || item.name}</Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
