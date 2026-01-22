require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_BDD, DB_URL
} = process.env;

// Configuración de entorno (Soporte para deploy con SSL en Render/Railway vs Local)
const sequelize = DB_URL
  ? new Sequelize(DB_URL, {
      logging: false,
      native: false,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
    })
  : new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`, {
      logging: false,
      native: false,
    });

const basename = path.basename(__filename);
const modelDefiners = [];

// Carga dinámica de modelos desde el directorio
fs.readdirSync(path.join(__dirname, '/src/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/src/models', file)));
  });

// Inyección de conexión y capitalización de nombres
modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Favorite, Character } = sequelize.models;

// Definición de asociaciones
// User.belongsToMany(Favorite, { through: "user_favorite" });
// Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};