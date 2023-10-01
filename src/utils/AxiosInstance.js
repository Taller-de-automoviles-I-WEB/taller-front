import axios from 'axios';


const Axios = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 5000,
  timeoutErrorMessage: 'Request timed out',
});

export default Axios;