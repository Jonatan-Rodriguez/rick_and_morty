const axios = require('axios');
const { Favorite } = require('../../db'); // Importamos tu modelo DB

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
    const { id } = req.params;

    try {
        // Estrategia: Verificamos si el ID es un UUID (contiene guiones)
        // Si es UUID, buscamos en la base de datos local
        if (id.includes("-")) {
            const charFromDb = await Favorite.findOne({ where: { id } });
            if (charFromDb) {
                return res.status(200).json(charFromDb);
            } else {
                return res.status(404).send('Personaje no encontrado en Base de Datos');
            }
        }

        // Si NO es UUID (es numérico), buscamos en la API externa
        const { data } = await axios.get(`${URL}/${id}`);
        
        if (data.id) {
            const charFromApi = {
                id: data.id.toString(), // Convertimos a string para consistencia
                name: data.name,
                species: data.species,
                origin: data.origin.name, // La API devuelve un objeto, extraemos el nombre
                image: data.image,
                gender: data.gender,
                status: data.status
            }
            return res.status(200).json(charFromApi);
        }

        return res.status(404).send('Not found');

    } catch (error) {
        // Manejo de error específico si la API falla (ej: 404 o 500)
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getCharById
};