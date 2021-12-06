const { Router } = require('express');
const usuarioRoute = require('./usuario');

const router = Router();

//rutas
router.get('/usuarios', usuarioRoute);
router.post('/usuarios',usuarioRoute);
router.put('/usuarios/:id',usuarioRoute);
router.delete('/usuarios/:id',usuarioRoute);

module.exports = router;
