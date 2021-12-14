const { Router } = require('express');

const { notas } = require('../controllers/notas');

const router = Router();

router.post('/',notas);

module.exports = router;