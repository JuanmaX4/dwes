/**Crear un middleware para el control de errores que devuelva un error 500 con el mensajes
'Server Error'*/

const express = require('express');
const app = express();

function controller(req, res, next) {
    try {
        throw Error('Hmmmm... there is an error over here ....')
    } catch (err) {
        return next(err);
    }
}
function errorHandler(err, req, res, next) {
        const statusCode = err.statusCode < 500 ? err.statusCode : 500;
        res.status(statusCode).send({ code: statusCode, message: 'Server Error'});
}

app.use(controller);
app.use(errorHandler);
app.listen(3000);
