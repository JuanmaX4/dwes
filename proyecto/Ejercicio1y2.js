/**
1. Iniciarlizar un proyecto NPM, instalar y ejecutar cualquier módulo NPM.
2. Crear un programa que imprima un nombre aleatorio en un color aleatorio.
• Los valores aleatorios serán generados con el módulo faker.
• Puede usarse un módulo (chalk, colors, ora) o los códigos de texto para consola. */

const chalk = require('chalk');
const faker = require('faker');

var nombreAleatorio = faker.name.findName();

var colorAleatorio = faker.commerce.color();
    
console.log(colorAleatorio);

color = chalk.keyword(colorAleatorio);

console.log(color(nombreAleatorio));

/**3. Crear un programa que imprima la fecha actual, en formato dd-MM-YYYY HH:mm:ss y se actu-
alice cada segundo.

• Modificación: Cada vez que los segundos se pongan a 0 o múltiplo de 10, se pondrá en verde el
tiempo (día excluido). */

let date;
date = new Date(); // Get the current date
console.log(date);
newDate = new Date(1223727718982)



//DateTime.fromMillis(1542674993410);
