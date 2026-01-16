/* Controller */
const { getCharById } = require('../controllers/getCharById');
const { getCharAll } = require('../controllers/getCharAll');
const { login } = require('../controllers/login');
const { postFavorite } = require('../controllers/postFavorite');
const { deleteFavorite } = require('../controllers/deleteFavorite');
const { getFavorite } = require('../controllers/getFavorite');
const { postChar } = require('../controllers/postChar');
const { deleteCharacter } = require('../controllers/deleteCharacter');
const { putCharacter } = require('../controllers/putCharacter');

/* Express config */
const express = require('express');
const router = express.Router();

/* Routes */

router.get('/character/:id', getCharById);

router.get('/character', getCharAll);

router.get('/login', login);

router.get('/favorite', getFavorite);

router.post('/character', postChar);

router.post('/favorite', postFavorite);

router.put('/character/:id', putCharacter);

router.delete('/favorite/:id', deleteFavorite);

router.delete('/character/:id', deleteCharacter);

module.exports = {
    router
}