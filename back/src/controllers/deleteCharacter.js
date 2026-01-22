const { Character, Favorite } = require('../../db');

const deleteCharacter = async (req, res) => {
    try {
        const { id } = req.params;

        // Eliminación del recurso en la tabla principal
        const charToDelete = await Character.findByPk(id);
        if (charToDelete) {
            await charToDelete.destroy();
        }

        // Integridad de datos: Asegurar eliminación en tabla dependiente (Favorite)
        await Favorite.destroy({
            where: { id: id }
        });

        // Retornar estado actualizado de la colección para refresco en cliente
        const myCharacters = await Character.findAll();
        
        return res.status(200).json(myCharacters);

    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { deleteCharacter };