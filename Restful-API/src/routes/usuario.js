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


//Eliminar 

router.delete('/usuarios:id', (req, res) =>{
    const { id } = req.params;

           //for q recorre los usuarios y elimina el usuario que tenga el mismo id que hayas puesto en el postman

    _.each(usuarios, (usuario, i) => {
        if (usuario.id == id) {
            usuarios.splice(i, 1);
        }
    });

    console.log(req.params);
    res.send('eliminado');
    res.send(Usuarios);
});

module.exports = router;
