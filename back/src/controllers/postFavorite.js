const { Favorite } = require('../../db');

const postFavorite = async (req, res) => {
    try {
        const { id, name, status, species, origin, image } = req.body;

        const existingCharacter = await Favorite.findOne({ where: { id } });
        if (existingCharacter) {
            return res.status(400).json({ message: 'El personaje ya existe en la base de datos' });
        }

        const charCreate = await Favorite.create({ id, name, status, species, origin, image });

        return res.status(200).json(charCreate);

    } catch (error) {
        console.error('Error al agregar un personaje a la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    postFavorite
};