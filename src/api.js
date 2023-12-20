import axios from 'axios';

const API_KEY = '1e5947fc4ba2d3d55b90daeefaa35fdf';
const baseUrl = 'https://api.themoviedb.org/3';

const getData = async () => {
  // const url = 'https://api.themoviedb.org/3/movie/11?api_key=API_KEY'
  // https://api.themoviedb.org/3/trending/all/;

  const response = await axios.get(
    `${baseUrl}/trending/all/day?api_key=${API_KEY}`
  );
  const data = await response.data.results;
  console.log('after data', data);

  return data;
};

export default getData;
