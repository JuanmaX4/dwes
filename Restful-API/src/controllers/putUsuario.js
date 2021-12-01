const { Router } = require('express');
const router = Router();
const _ =  require('underscore') //lul se puede guardar con un guion abajo

const usuarios = require('../loaders/stored.json');
console.log(usuarios);



router.put('/usuarios:id', (req, res) =>{
    const { id } = req.params;
    const { name, pass } = req.body;

    if (id && name && pass) {
       //for q recorre los usuarios y actualiza el usuario que tenga el mismo id que hayas puesto en el postman
        _.each(usuarios, (usuario, i) => {
            if (usuario.id == id) {
                usuario.name = name;
                usuario.pass = pass;
            }
        });

        res.json(usuarios);

    }else{
        res.status(500).json({error: 'Hubo un error inesperado.'});
    }

});

module.exports = router;
