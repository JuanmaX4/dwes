const { Router } = require('express');

const ping = require('./ping');

const router2 = Router();

router2.use('/ping', ping);

module.exports = router2;