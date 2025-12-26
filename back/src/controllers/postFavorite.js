const { Favorite } = require('../../db');

const postFavorite = async (req, res) => {
    try {
        let { id, name, status, species, origin, image } = req.body;

        // --- SOLUCIÓN DEL ERROR DE TIPOS ---
        // Forzamos que el ID sea siempre un String.
        // Si llega el número 1, lo convertimos a "1" para que PostgreSQL no se queje.
        id = String(id); 

        // --- SOLUCIÓN DEL ERROR DE ORIGEN (que vimos antes) ---
        if (origin && typeof origin === 'object') {
            origin = origin.name;
        }
        if (!origin) {
            origin = "Unknown";
        }

        // Verificamos si ya existe
        const existingCharacter = await Favorite.findOne({ where: { id } });
        
        if (existingCharacter) {
            return res.status(400).json({ message: 'El personaje ya existe en favoritos' });
        }

        // Guardamos
        const charCreate = await Favorite.create({ 
            id, 
            name, 
            status, 
            species, 
            origin, 
            image 
        });

        return res.status(200).json(charCreate);

    } catch (error) {
        console.error('Error al agregar favorito:', error.message);
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    postFavorite
};