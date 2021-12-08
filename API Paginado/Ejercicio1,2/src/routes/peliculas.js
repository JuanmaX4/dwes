const express = require('express');

const { peliculas } = require('../controllers/peliculas');

const router = express.Router();

router.get('/', peliculas);


module.exports = router;