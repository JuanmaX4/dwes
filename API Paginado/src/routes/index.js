const express = require('express');

const { rootController } = require('../controllers');
const { users } = require('../controllers/users');
const { peliculas } = require('../controllers/peliculas');



const router = express.Router();

router.get('/', rootController);
router.get('/users', users);
router.get('/peliculas', peliculas);

module.exports = router;