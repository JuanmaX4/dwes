const { Router } = require('express');
const { createUsuario } = require('../controllers/createUsuario');
const { deleteUsuario } = require('../controllers/deleteUsuario');
const { getUsuario } = require('../controllers/getUsuario');
const { putUsuario } = require('../controllers/putUsuario');


const router = Router();

router.get('/',getUsuario);
router.post('/',createUsuario);
router.put('/',putUsuario);
router.delete('/',deleteUsuario);


module.exports = router;
