import axios from 'axios';

const apiUrl = process.env.NODE_ENV === 'production' 
    ? 'https://rick-and-morty-jea4.onrender.com/rickandmorty'
    : 'http://localhost:3001/rickandmorty';

const instance = axios.create({
    baseURL: apiUrl,
});

export default instance;