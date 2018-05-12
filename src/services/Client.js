import axios from 'axios';

const client = axios.create({
    baseURL: process.env.API_HOST,
    responseType: 'json'
});

client.interceptors.request.use(function(config) {
    let token = localStorage.getItem('session');
    
    if ( token != null ) {
        config.headers.Authorization = `Token ${token}`;
    }
  
    return config;
}, function(err) {
    return Promise.reject(err);
});

export { client };