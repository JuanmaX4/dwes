const fs = require('fs');
const {dameLasnotasYa} = require("../ayuda");
const carpetita = 'data';


async function createNota(req, res) {
    const nombre = req.params.nombre;
    const contenido = req.body;
    //fs.writeFileSync();
    return fs.writeFileSync(`${dameLasnotasYa}/${carpetita}/${nombre}.note`, `${contenido.message}`);
}

module.exports = {createNota};