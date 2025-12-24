const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.STRING, // Cambiamos a String para aceptar UUIDs y Números
         defaultValue: DataTypes.UUIDV4, // Genera un UUID automáticamente
         allowNull: false,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false,
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      createdInDb: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: true, // Por defecto, asumimos que se creó en DB
      }
   }, { timestamps: false });
};