import axios from 'axios';

const API_KEY = '1e5947fc4ba2d3d55b90daeefaa35fdf';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const trendingMovies = `trending/all/day?api_key=${API_KEY}`;
const searchByQuery = `search/movie?api_key=${API_KEY}&page=1&query=`;

const getData = async () => {
  const response = await axios.get(trendingMovies);
  const data = await response.data.results;

  return data;
};

const searchData = async query => {
  const response = await axios.get(searchByQuery + query);
  const data = await response.data.results;

  return data;
};

const getMovieInfo = async (movieId, direction) => {
  const response = await axios.get(
    `movie/${movieId}${direction || ''}?api_key=${API_KEY}`
  );
  const data = await response.data;

  return data;
};

export { getData, searchData, getMovieInfo };
