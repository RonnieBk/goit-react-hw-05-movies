import axios from 'axios';

const API_KEY = '1e5947fc4ba2d3d55b90daeefaa35fdf';
const baseUrl = 'https://api.themoviedb.org/3';

const trendingMovies = `${baseUrl}/trending/all/day?api_key=${API_KEY}`;
const searchByQuery = `${baseUrl}/search/movie?api_key=${API_KEY}&page=1&query=`;

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

const getMovieInfo = async (movieId, link) => {
  const response = await axios.get(
    `${baseUrl}/movie/${movieId}${link || ''}?api_key=${API_KEY}`
  );
  const data = await response.data;

  return data;
};

export { getData, searchData, getMovieInfo };
