const { Character } = require('../../db');

const putCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status, species, gender, origin, image } = req.body;

        // Recuperación de la entidad objetivo
        const character = await Character.findByPk(id);

        if (!character) {
            return res.status(404).json({ message: "Personaje no encontrado" });
        }

        // Actualización parcial (Partial Update): Se priorizan los datos entrantes, manteniendo los existentes como fallback
        character.name = name || character.name;
        character.status = status || character.status;
        character.species = species || character.species;
        character.gender = gender || character.gender;
        character.origin = origin || character.origin;
        character.image = image || character.image;

        // Persistencia de cambios
        await character.save();

        return res.status(200).json(character);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { putCharacter };