import axios from 'axios';

// Detecta si estamos en desarrollo (localhost) o producción
// En Create React App, process.env.NODE_ENV se configura automáticamente
const apiUrl = process.env.NODE_ENV === 'production' 
    ? 'https://rick-and-morty-jea4.onrender.com/rickandmorty' // Tu URL de Render
    : 'http://localhost:3001/rickandmorty'; // Tu URL Local

const instance = axios.create({
    baseURL: apiUrl,
});

export default instance;