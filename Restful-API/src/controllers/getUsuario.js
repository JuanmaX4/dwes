const { Router } = require('express');
const router = Router();
const _ =  require('underscore') //lul se puede guardar con un guion abajo

const usuarios = require('../loaders/stored.json');
console.log(usuarios);


//Mostrar todos los usuarios

router.get('/usuarios', (req, res) => {
    res.json(usuarios);
})

router.post('/usuarios', (req, res) => {
    const { id, name, pass } = req.body;
    if(id && name && pass) {
        const id = usuarios.length + 1;
        const newUsuario = {...req.body, id};
        console.log(newUsuario);
        
        //usuarios.push
        usuarios.push(newUsuario);
        res.status(200).json(usuarios);
    }
    else{
        res.status(500).send('Vaya algo salio mal!');
    }
});

module.exports = router;

