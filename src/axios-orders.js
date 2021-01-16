import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-builder-d9c68-default-rtdb.firebaseio.com/',
});

export default instance;
