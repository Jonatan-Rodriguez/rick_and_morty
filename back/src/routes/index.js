/* Controller */
const { getCharById } = require('../controllers/getCharById');
const { getCharAll } = require('../controllers/getCharAll');
const { postFav, deleteFav, getFav } = require('../controllers/handleFavorites');
const { login } = require('../controllers/login');

/* Express config */
const express = require('express');
const router = express.Router();

/* Routes */

router.get('/character/:id', getCharById);

router.get('/character', getCharAll);

router.get('/login', login);

router.get('./fav', getFav);

router.post('/fav', postFav);

router.delete('/fav/:id', deleteFav);

module.exports = {
    router
}