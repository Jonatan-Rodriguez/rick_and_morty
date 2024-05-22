require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_BDD, DB_PORT } = process.env;
const FavoriteModel = require('./src/models/Favorite');
const UserModel = require('./src/models/User');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_BDD}`,
   { logging: false, native: false }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;
/* suspendo las relaciones por el momento

User.belongsToMany(Favorite, { through: "user_favorite" });
Favorite.belongsToMany(User, { through: "user_favorite" });
 */
module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
