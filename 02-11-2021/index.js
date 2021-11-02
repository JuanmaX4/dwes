/* eslint-disable no-unused-vars */
/* 1. Configurar un proyecto para que detecte los errores de estilo de código.
2. Detectar y arreglar malas prácticas y estilos en el código con Eslint.
3. Ver errores del siguiente */

const youShouldNeverUseVar = 'This is my very long line that eslint should check as an error ............................................';

function myFunction(used) {
  if (used) {
    console.log(used);
  }
}

// eslint-disable-next-line no-undef
module.exports = nonExistingVar;
