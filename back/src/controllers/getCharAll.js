const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        const { name, numPag } = req.query;

        let allCharacters = [];
        let endpoint = `${URL}/?name=${name || ''}&&page=${numPag || '1'}`;

        const { data } = await axios.get(endpoint);

        if(data.results.length){
            
            const { results } = data;
    
            allCharacters = allCharacters.concat(results);
        }

        if (allCharacters.length > 0) {
            return res.status(200).json({pages: data.info.pages, allCharacters: allCharacters});
        }

        return res.status(404).json({ error: 'No se encontraron personajes' });

    } catch (error) {
        console.error('Error al consultar todos los personajes:', error.message);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getCharAll
};