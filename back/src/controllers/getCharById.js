const axios = require('axios');
const { Character } = require('../../db'); 

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    const { id } = req.params;

    try {
        // CASO 1: Si el ID tiene guiones (es UUID), buscamos en Base de Datos
        if (id.includes("-")) {
            const charFromDb = await Character.findByPk(id); 
            
            if (charFromDb) {
                // Formateamos para que el Front lo lea igual que a los de la API
                const charFormatted = {
                    id: charFromDb.id,
                    name: charFromDb.name,
                    image: charFromDb.image,
                    status: charFromDb.status,
                    species: charFromDb.species,
                    gender: charFromDb.gender,
                    origin: { name: charFromDb.origin }, // Truco para que Detail.jsx no falle
                    location: { name: charFromDb.origin } // Rellenamos location también
                };
                return res.status(200).json(charFormatted);
            } 
            return res.status(404).send('Personaje no encontrado en DB');
        }

        // CASO 2: Si el ID no tiene guiones (es número), buscamos en API
        const { data } = await axios.get(`${URL}/${id}`);
        
        if (data.id) {
            const charFromApi = {
                id: data.id.toString(),
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender,
                status: data.status,
                location: data.location
            }
            return res.status(200).json(charFromApi);
        }

        return res.status(404).send('Not found');

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { getCharById };