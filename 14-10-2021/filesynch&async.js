// ! IMPORTES
var fs = require("fs");
const prompt = require('prompt-sync')();


//Creamos el fichero
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Guardado al crearlo!');
});

//agregamos al fichero algunas lineas de texto 
console.log('Escribe texto');

texto = prompt();

fs.writeFile('mynewfile1.txt', texto, function (err) {
    if (err) throw err;
        console.log('Guardado al escribirlo!');
    });


// Lectura asincrona
fs.readFile('mynewfile1.txt', function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Lectura asincrona: " + data.toString());
    //? forma de controlar los errores median el try catch return data;
 });
 
 // Lectura sincrona
 var data = fs.readFileSync('mynewfile1.txt');
 console.log("Lectura sincrona: " + data.toString());
 


 console.log("Fin Programa");


