const http = require('http');

/* 1. Crear un servidor en NodeJS que devuelva Hello World! cuando se acceda al puerto 4000

http.createServer((req, res) => {
 res.end('Hello World!\n');
}).listen(4000);*/

/* 2. Crear un servidor en NodeJS que devuelva una página web (puerto 3000) */

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!</h1></body></html>');
}).listen(3000);

/*3. Crear un servidor en NodeJS que tenga distintas páginas según la URL accedida. */

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/books":
            res.writeHead(200);
            res.end('<html><body>Aqui hay libros</body></html>');
            break
        case "/authors":
            res.writeHead(200);
            res.end('<html><body>Aqui hay libros</body></html>');
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({error:"illo no te rayes que por aki no es shur"}));
    }
}).listen(3001);

