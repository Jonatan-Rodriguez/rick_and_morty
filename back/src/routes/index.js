/* Controller */
const { getCharById } = require('../controllers/getCharById');
const { getCharAll } = require('../controllers/getCharAll');
const { postFav, deleteFav, getFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');
const { postFavorite } = require('../controllers/postFavorite');

/* Express config */
const express = require('express');
const router = express.Router();

/* Routes */

router.get('/character/:id', getCharById);

router.get('/character', getCharAll);

router.get('/login', login);

router.get('./fav', getFav);

router.post('/fav', postFav);

router.post('/favorite', postFavorite);

router.delete('/fav/:id', deleteFav);

module.exports = {
    router
}