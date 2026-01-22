const axios = require('axios');
const { Character } = require('../../db');
const { Op } = require('sequelize');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        const { name, numPag, gender, status, source } = req.query;
        const page = numPag || 1;

        let dbCharacters = [];
        let apiCharacters = [];
        let totalPages = 0;

        // 1. Recuperación de datos locales (DB) con filtros dinámicos
        // Se omite si la fuente solicitada es estrictamente externa ('api')
        if (source !== 'api') {
            const whereCondition = {};
            
            if (name) whereCondition.name = { [Op.iLike]: `%${name}%` };
            if (gender && gender !== 'all') whereCondition.gender = gender;
            if (status && status !== 'all') whereCondition.status = status;

            dbCharacters = await Character.findAll({ where: whereCondition });
            
            // Normalización: Adaptar entidad local al esquema DTO de la API externa
            dbCharacters = dbCharacters.map(char => ({
                id: char.id,
                name: char.name,
                image: char.image,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: { name: char.origin },
                createdInDb: true
            }));
        }

        // 2. Consulta a API Externa
        // Se omite si la fuente solicitada es estrictamente local ('created')
        if (source !== 'created') {
            try {
                let apiUrl = `${URL}/?page=${page}`;
                if (name) apiUrl += `&name=${name}`;
                if (gender && gender !== 'all') apiUrl += `&gender=${gender}`;
                if (status && status !== 'all') apiUrl += `&status=${status}`;

                const { data } = await axios.get(apiUrl);
                
                if (data.results) {
                    apiCharacters = data.results;
                    totalPages = data.info.pages; 
                }
            } catch (error) {
                // Manejo silencioso: La API retorna 404 si no hay coincidencias.
                // Permitimos continuar para retornar posibles resultados de DB.
                console.log("La API no encontró resultados para los filtros dados.");
            }
        }

        // 3. Agregación de resultados
        const allCharacters = [...dbCharacters, ...apiCharacters];

        // Definición de paginación para respuesta híbrida
        // Nota: Prioriza la paginación de la API. La paginación combinada real requiere cursor unificado.
        const finalPages = totalPages > 0 ? totalPages : (allCharacters.length > 0 ? 1 : 0);

        if (allCharacters.length === 0) {
            return res.status(200).json({ pages: 0, allCharacters: [] });
        }

        return res.status(200).json({
            pages: finalPages,
            allCharacters: allCharacters
        });

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { getCharAll };