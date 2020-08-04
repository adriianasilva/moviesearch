import axios from 'axios';

const api = axios.create(
{
  baseURL: 'ttps://api.themoviedb.org/3/movie/550?api_key=0030ef91e243888043f8b436ffe721fe',
});

export default api;