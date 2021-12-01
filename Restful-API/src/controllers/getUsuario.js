const { Router } = require('express');
const router = Router();

const usuarios = require('../loaders/stored.json');
console.log(usuarios);


//Mostrar todos los usuarios

router.get('/usuarios', (req, res) => {
    res.json(usuarios);
})

module.exports = router;

