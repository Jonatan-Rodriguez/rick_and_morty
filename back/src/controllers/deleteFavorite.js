const { Favorite } = require('../../db');

const deleteFavorite = async (req, res) => {
    try {
        const { id } = req.params;

        // Buscar el personaje por id
        const character = await Favorite.findOne({ where: { id } });

        if (!character) {
            return res.status(404).json({ message: 'Personaje no encontrado' });
        }

        // Eliminar el personaje
        await character.destroy();

        return res.status(200).json({ message: 'Personaje eliminado con éxito' });

    } catch (error) {
        console.error('Error al eliminar un personaje de la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    deleteFavorite
};