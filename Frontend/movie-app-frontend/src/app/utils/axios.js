import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});


instance.interceptors.request.use(
  (config) => {
    
    const token = localStorage.getItem('token');

   
    if (token && config.url !== 'auth/signin' && config.url !== 'auth/signup') {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
