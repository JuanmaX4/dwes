const { Router } = require('express');

const fibonacci = require('./fibonacci');

const router2 = Router();

router2.use('/fibonacci', fibonacci);

module.exports = router2;