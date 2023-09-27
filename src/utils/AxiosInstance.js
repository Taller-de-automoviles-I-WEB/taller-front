import axios from 'axios';


const Axios = axios.create({
  baseURL: 'https://carfix-dev.fl0.io/api/',
  timeout: 5000,
  timeoutErrorMessage: 'Request timed out',
});

export default Axios;