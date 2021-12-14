const { Router } = require('express');

const { verificar } = require('../controllers/verificarLogin');

const router = Router();

router.post('/',verificar);

module.exports = router;