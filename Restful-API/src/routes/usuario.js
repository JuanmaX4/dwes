const { Router } = require('express');
const { createUsuario } = require('../controllers/createUsuario');
const { deleteUsuario } = require('../controllers/deleteUsuario');
const { getUsuario } = require('../controllers/getUsuario');
const { putUsuario } = require('../controllers/putUsuario');


const router = Router();

router.get('/usuarios',getUsuario);
router.post('/usuarios',createUsuario);
router.put('/usuarios/:id',putUsuario);
router.delete('/usuarios/:id',deleteUsuario);


module.exports = router;
