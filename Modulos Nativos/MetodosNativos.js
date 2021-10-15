/**2. Crear un editor de notas con Nodejs
• Tendrá un menú que permita:
    1. Crear nueva nota
    2. Editar nota existente
    3. Eliminar nota

• Cada nota será un fichero de texto, con extensión .note
• Para editar una nota, habrá que imprimir la lista de notas disponibles y seleccionar una
• Cuando se está escribiendo una nota, ha de permitir continuar su edición hasta introducir dos
veces seguidas una linea en blanco */


const prompt = require('prompt-sync')();

var opcion=4;

var fs = require('fs');

// ! Intento de hacer un programa que no sea por una sola ejecucion.... sale mal
while(opcion!=0){
    
    console.log('Editor de notas NodeJS');
    console.log('------------------------------');
    console.log('Introduce lo que quieres hacer');
    console.log('0. Salir');
    console.log('1. Crear nueva nota');
    console.log('2. Editar nota existente');
    console.log('3. Eliminar nota');
    console.log('------------------------------');
    opcion = prompt();

    if (opcion==1) {    
        fs.appendFile('mynewfile1.note', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Guardado con exito al crearlo!!!');
          });
    }
    if(opcion==2){
        console.log('Escribe texto');
        texto = prompt();
        fs.writeFile('mynewfile1.note', texto, function (err) {
            if (err) throw err;
            console.log('Guardado con exito el modificarlo!!!');
          });
    }
    if(opcion==3){
        try {
            fs.unlinkSync(`${__dirname}/mynewfile1.txt`);
            console.log('Archivo de texto eliminado:', __dirname);
        } catch (err) {
            console.error(err);
        }
    }
}

console.log('fin');
