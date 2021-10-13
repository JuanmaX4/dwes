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


do{
    console.log('Editor de notas NodeJS');
    console.log('------------------------------');
    console.log('Introduce lo que quieres hacer');
    console.log('1. Crear nueva nota');
    console.log('2. Editar nota existente');
    console.log('3. Eliminar nota');

    opcion = prompt();
    
}
while(opcion!=0)