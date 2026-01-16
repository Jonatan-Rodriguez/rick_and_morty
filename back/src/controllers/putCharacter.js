const { Character } = require('../../db');

const putCharacter = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, status, species, gender, origin, image } = req.body;

        // 1. Buscamos el personaje y verificamos que exista
        const character = await Character.findByPk(id);

        if (!character) {
            return res.status(404).json({ message: "Personaje no encontrado" });
        }

        // 2. Actualizamos los campos
        character.name = name || character.name;
        character.status = status || character.status;
        character.species = species || character.species;
        character.gender = gender || character.gender;
        character.origin = origin || character.origin;
        character.image = image || character.image;

        // 3. Guardamos cambios en DB
        await character.save();

        return res.status(200).json(character);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { putCharacter };