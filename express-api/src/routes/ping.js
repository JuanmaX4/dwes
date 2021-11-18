const { Router } = require('express');

const { getPing } = require('../controllers/ping');

const router = Router();

router.get('/',getPing);

module.exports = router;