const { Router } = require('express');
const router = Router();
const usuarios = require('../loaders/stored.json');
console.log(usuarios);




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
