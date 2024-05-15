const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharAll = async (req, res) => {
    try {
        const { name } = req.query;

        //cumplira estas condiciones si existe query
        if(name){
            let charFound = [];
            
        }
    } catch (error) {
        console.error('Error al consultar todos los personajes:', error.message);

        return res.status(500).json({ message: 'Error interno del servidor' });
    }
}