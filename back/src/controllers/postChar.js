const { Character } = require('../../db'); 

const postChar = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;

        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(400).send("Faltan datos obligatorios");
        }

        const newChar = await Character.create({
            name,
            origin,
            status,
            image,
            species,
            gender
        });

        return res.status(200).json(newChar);
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = { postChar };