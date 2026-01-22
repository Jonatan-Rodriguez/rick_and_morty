const { Favorite } = require('../../db');

const postFavorite = async (req, res) => {
    try {
        let { id, name, status, species, origin, image } = req.body;

        // Sanitización de PK: Asegurar consistencia de tipos (String) para la base de datos
        id = String(id); 

        // Normalización de Payload: Aplanar objetos anidados o asignar valores por defecto
        if (origin && typeof origin === 'object') {
            origin = origin.name;
        }
        if (!origin) {
            origin = "Unknown";
        }

        // Validación de duplicados (Idempotencia)
        const existingCharacter = await Favorite.findOne({ where: { id } });
        
        if (existingCharacter) {
            return res.status(400).json({ message: 'El personaje ya existe en favoritos' });
        }

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