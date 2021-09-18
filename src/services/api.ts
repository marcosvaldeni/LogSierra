import axios from 'axios';

const api = axios.create({
  baseURL: 'http://logsierra.herokuapp.com',
});

export default api;
