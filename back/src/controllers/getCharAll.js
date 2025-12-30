const axios = require('axios');
const { Character } = require('../../db');
const { Op } = require('sequelize');

const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        // Recibimos los filtros por Query
        const { name, numPag, gender, status, source } = req.query;
        const page = numPag || 1;

        let dbCharacters = [];
        let apiCharacters = [];
        let totalPages = 0;

        // --- 1. LÓGICA BASE DE DATOS (DB) ---
        // Si el filtro source es "api", saltamos la DB
        if (source !== 'api') {
            const whereCondition = {};
            
            // Construimos filtros dinámicos para Sequelize
            if (name) whereCondition.name = { [Op.iLike]: `%${name}%` };
            if (gender && gender !== 'all') whereCondition.gender = gender;
            if (status && status !== 'all') whereCondition.status = status;

            dbCharacters = await Character.findAll({ where: whereCondition });
            
            // Formateamos
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

        // --- 2. LÓGICA API EXTERNA ---
        // Si el filtro source es "created", saltamos la API
        if (source !== 'created') {
            try {
                // Construimos la URL con los filtros
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
                // Si la API devuelve 404 es que no encontró nada con esos filtros
                console.log("La API no encontró resultados para los filtros dados.");
            }
        }

        // --- 3. UNIFICAR RESULTADOS ---
        const allCharacters = [...dbCharacters, ...apiCharacters];

        // Recalcular páginas si estamos mezclando DB y API
        // (Nota: Esto es una simplificación, ya que paginar híbridos es complejo.
        // Aquí priorizamos mostrar las páginas de la API)
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