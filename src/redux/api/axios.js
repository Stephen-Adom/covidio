import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2',
});

export default instance;
