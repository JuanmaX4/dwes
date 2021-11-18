const express = require('express')
const app = express()

/* 1. Crear un servidor en NodeJS que devuelva Hello World! cuando se acceda al puerto 4000*/

app.get('/',( req, res) => {
 res.send('Hello World!\n');
})
app.listen(4000);

/* 2. Crear un servidor en NodeJS que devuelva una página web (puerto 3000) */

app.get('/',(req, res) => {
    res.sendStatus = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send('<html><body><u>Hello!</u></body></html>');
})
app.listen(3000);

/*3. Crear un servidor en NodeJS que tenga distintas páginas según la URL accedida. */

app.get('/',(req, res) => {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/books":
            res.sendStatus(200);
            res.send('<html><body>Aqui hay libros</body></html>');
            break;
        case "/authors":
            res.sendStatus(200);
            res.send('<html><body>Aqui hay libros</body></html>');
            break;
        default:
            res.sendStatus(404);
            res.send(JSON.stringify({error:"illo no te rayes que por aki no es shur"}));
    }
})
app.listen(4001);

//Esta incompleto Gabri porque hoy es el dia del examen practico y estoy muy cansado sorry ;-;