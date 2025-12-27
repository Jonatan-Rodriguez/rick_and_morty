const { Character, Favorite } = require('../../db'); // Importamos AMBOS modelos

const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;

        // 1. Borramos el personaje de la tabla de creados (Character)
        const charToDelete = await Character.findByPk(id);
        if (charToDelete) {
            await charToDelete.destroy();
        }

        // 2. EL FIX: Borramos también de la tabla de Favoritos (Favorite)
        // Buscamos si existe ese ID en favoritos y lo eliminamos
        await Favorite.destroy({
            where: { id: id }
        });

        // 3. Devolvemos la lista actualizada de tus personajes
        const myCharacters = await Character.findAll();
        
        return res.status(200).json(myCharacters);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { deleteCharacter };