const { Router } = require('express');

const crud = require('./crud');

const router2 = Router();

router2.use('/crud', crud);

module.exports = router2;