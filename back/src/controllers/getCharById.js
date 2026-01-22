const axios = require('axios');
const { Character } = require('../../db'); 

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    const { id } = req.params;

    try {
        // Estrategia de enrutamiento: UUIDs indican registros locales (DB), Integers indican API externa
        if (id.includes("-")) {
            const charFromDb = await Character.findByPk(id); 
            
            if (charFromDb) {
                // Normalización de datos: Adaptamos la entidad local al esquema esperado por el cliente
                const charFormatted = {
                    id: charFromDb.id,
                    name: charFromDb.name,
                    image: charFromDb.image,
                    status: charFromDb.status,
                    species: charFromDb.species,
                    gender: charFromDb.gender,
                    // Replicamos la estructura anidada de la API externa para evitar rupturas en la UI
                    origin: { name: charFromDb.origin }, 
                    location: { name: charFromDb.origin } 
                };
                return res.status(200).json(charFormatted);
            } 
            return res.status(404).send('Personaje no encontrado en DB');
        }

        // Fetch a servicio externo
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
                location: data.location,
                episode: data.episode
            }
            return res.status(200).json(charFromApi);
        }

        return res.status(404).send('Not found');

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { getCharById };