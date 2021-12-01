const { Router } = require('express');
const router = Router();
const _ =  require('underscore') //lul se puede guardar con un guion abajo

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
