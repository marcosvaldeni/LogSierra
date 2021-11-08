import axios from 'axios';

const api = axios.create({
  baseURL: 'https://logsierra.herokuapp.com',
});

export default api;
