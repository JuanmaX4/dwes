/**1. Usar la consola en medio de una ejecucíon
2. Añadir variables y expresiones en el panel de debug
3. Alterar el valor de una variable y continuar la ejecución
4. Deshabilitar los puntos de ruptura
5. Realizar una petición con node-fetch e inspeccionar la respuesta en el inspector
6. Extraer los datos de un objeto de una librería
• Propiedades
• Métodos
• Eventos */

function calcula() {
    var num1 = 2;
    console.log('Numero 1:', num1);
    var num2 = 6; //aqui cambie el programa para probar el debugg
    console.log('Numero 2:', num2);
    var sum = num1 + num2;
    console.log('sum:', sum);
    console.log(num1 + ' + ' + num2 + ' = ' + sum);
}
calcula();

// peticion del got en el que se promete una peticion al servidor github
//si responde sale todo el html en consola de la pagina web y obviamente si no sale saldra el error

const got = require('got');

(async () => {
    try {
        const response = await got('https://www.github.com');
        console.log(response.body);
        //=> '<!doctype html> ...'
    } catch (error) {
        console.log(error.response.body);
        //=> 'Internal server error ...'
    }
})();
