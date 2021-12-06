//const { Router } = require('express');
// const router = Router();

const usuarios = require('../loaders/stored.json');


//Mostrar todos los usuarios

// router.get('/usuarios', (req, res) => { res.status(200).json(usuarios); });

function getUsuarios(req, res) {
    res.status(200).json(usuarios);
    console.log(usuarios);
}

module.exports = {getUsuarios};

