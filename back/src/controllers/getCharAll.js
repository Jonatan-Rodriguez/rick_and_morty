const axios = require('axios');
const { Character } = require('../../db');
const { Op } = require('sequelize');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        const { name, numPag } = req.query;

        // 1. BUSCAR EN BASE DE DATOS
        let dbCharactersRaw = await Character.findAll({
            where: name ? { name: { [Op.iLike]: `%${name}%` } } : {}
        });

        // --- EL FIX: FORMATEAR DATOS DE LA DB ---
        // Convertimos los datos de la DB para que tengan la misma estructura que la API
        const dbCharacters = dbCharactersRaw.map(char => {
            return {
                id: char.id,
                name: char.name,
                image: char.image,
                status: char.status,
                species: char.species,
                gender: char.gender,
                // AQUÍ ESTÁ LA SOLUCIÓN:
                // Envolvemos el string en un objeto con propiedad 'name'
                origin: { 
                    name: char.origin 
                }, 
                createdInDb: true
            }
        });

        // 2. BUSCAR EN API
        let apiCharacters = [];
        let apiPages = 0;

        try {
            const endpoint = `${URL}/?name=${name || ''}&page=${numPag || '1'}`;
            const { data } = await axios.get(endpoint);
            
            if (data.results) {
                apiCharacters = data.results;
                apiPages = data.info.pages;
            }

        } catch (error) {
            if (error.response && error.response.status === 404) {
                console.log('API: No results found');
            } else {
                console.error('Error API:', error.message);
            }
        }

        // 3. UNIFICAR
        const allCharacters = [...dbCharacters, ...apiCharacters];

        if (allCharacters.length === 0) {
            return res.status(404).json({ error: 'No se encontraron personajes' });
        }

        return res.status(200).json({
            pages: apiPages || 1,
            allCharacters: allCharacters
        });

    } catch (error) {
        console.error('Error general:', error.message);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getCharAll
};