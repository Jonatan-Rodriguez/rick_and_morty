const { Favorite } = require('../../db');

const postChar = async (req, res) => {
    try {
        // Recibimos los datos del formulario (Body)
        const { name, origin, status, image, species, gender } = req.body;

        // Validamos que estén los datos obligatorios
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(400).send("Faltan datos obligatorios");
        }

        // Creamos el personaje en la DB
        // NOTA: No pasamos 'id', dejamos que Sequelize genere el UUID automáticamente
        const newChar = await Favorite.create({
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