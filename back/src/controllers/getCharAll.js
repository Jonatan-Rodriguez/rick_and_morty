const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        const { name } = req.query;

        //cumplira estas condiciones si existe query
        if (name) {
            let charFound = [];

            const { data } = await axios.get(`${URL}/?name=${name}`);

            if (data.results.length > 0) {
                data?.results?.map((charApi) => {
                    charFound.push(charApi);
                });
            }

            if (charFound[0]) {
                return res.status(200).json(charFound);
            }

            return res.status(404).json({ error: 'Personaje no encontrado' });
        }

        //cumplira esta condiciones si no existe query
        const allChar = [];

        const { data } = await axios.get(URL);

        if (data.results.length > 0) {

            data?.results?.map((charApi) => {
                allChar.push(charApi);
            });

            return res.status(200).json(allChar);
        }

        return res.status(404).json({ error: 'Error al consultar los personajes' })

    } catch (error) {
        console.error('Error al consultar todos los personajes:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getCharAll
};