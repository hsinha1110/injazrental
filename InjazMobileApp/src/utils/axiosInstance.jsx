import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'http://localhost:8000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default axiosInstance;
