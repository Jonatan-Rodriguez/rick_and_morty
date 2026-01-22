const { Favorite } = require('../../db');

const deleteFavorite = async (req, res) => {
    try {
        let { id } = req.params;
        
        id = String(id);

        await Favorite.destroy({ where: { id } });

        const allFavorites = await Favorite.findAll();
        return res.status(200).json(allFavorites);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { deleteFavorite };