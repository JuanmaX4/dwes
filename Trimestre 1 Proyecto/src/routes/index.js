const { Router } = require('express');

const token = require('./login');

const contra = require('./verificar');

const router2 = Router();

router2.use('/login', token);

router2.use('/verificar', contra);

module.exports = router2;