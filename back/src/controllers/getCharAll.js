const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        const { name } = req.query;

        let allCharacters = [];
        let nextPage = `${URL}/?name=${name || ''}`;

        // Recorrer todas las páginas hasta que no haya más páginas disponibles
        while (nextPage) {
            const { data } = await axios.get(nextPage);
            const { results, info } = data;

            // Agregar los resultados de esta página a la lista de personajes
            allCharacters = allCharacters.concat(results);

            // Obtener la URL de la próxima página
            nextPage = info.next;
        }

        if (allCharacters.length > 0) {
            return res.status(200).json(allCharacters);
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