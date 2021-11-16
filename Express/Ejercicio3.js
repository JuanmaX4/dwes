/*Crear un middleware para el control de errores que devuelva un error 
500 con el mensajes 'Server Error'*/


const express = require('express');
const morgan = require('morgan');

const app = express();

app.listen(3000);
app.use(morgan('tiny'));