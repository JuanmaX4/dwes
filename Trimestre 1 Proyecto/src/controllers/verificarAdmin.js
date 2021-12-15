const { send } = require("express/lib/response");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const {dameLasnotasYa} = require("../ayuda");
const carpetita = 'data';

function getCarpetita() {
    let archivo =  fs.readdirSync(`${dameLasnotasYa}/${carpetita}`);
    return archivo;
}

const guardar = getCarpetita();

/*const todaslasNotas =  guardar.map(guarda => {
    const contenido = fs.readFile(`${dameLasnotasYa}/${carpetita}/${guarda}`, 'utf-8');
    return { nombre: guarda, contenido:  contenido };
});*/


// Authorization: Bearer <token>
async function admin(req, res, next){
    const bearerHeader =  await req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
         const bearerToken = bearerHeader.split(" ")[1];
         req.token  = bearerToken;
         next();
    }
    //login del usuario
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.status(200).send(getCarpetita());
        }
    });
}



module.exports = { admin }

