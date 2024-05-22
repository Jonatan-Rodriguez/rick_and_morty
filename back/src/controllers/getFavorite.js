const { Favorite } = require('../../db');

const getFavorite = async (req, res) => {
    try {
        const favorites = await Favorite.findAll();

        return res.status(200).json(favorites);

    } catch (error) {
        console.error('Error al recuperar los personajes de la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    getFavorite
};