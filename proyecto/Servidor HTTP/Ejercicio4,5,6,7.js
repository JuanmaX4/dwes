/** 4. Crear 2 rutas:
• /page: Devuelve una pagina web
• /error: Devuelve una pagina de error con el código 404
5. Devolver las páginas cargadas de un fichero .html en lugar de escritas en código.

Gabriel Rodríguez Flores ADAITS 6

Servidor HTTP con NodeJS DWES November 4, 2021
6. Enviar el parámetro name por querystring y que devuelva Hello ${name}!
7. Ruta fizzbuzz con query string de un numero, y devuelve toda la secuencia de números hasta
dicho numero. */


// 4 Ejercicio

const http = require('http');

http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/page":
            res.writeHead(200);
            res.end('<html><body>Aqui hay libros</body></html>');
            break;
        case "/error":
            res.writeHead(404);
            res.end(JSON.stringify({error:"illo no te rayes que por aki no es shur"}));
    }
}).listen(3001);



// 5 Ejercicio

fs = require('fs');

fs.readFile('./pagina.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3002);
});

// 6. Enviar el parámetro name por querystring y que devuelva Hello ${name}!

var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = "Hello " + q.name;
  res.end(txt);
}).listen(3003);

/*7. Ruta fizzbuzz con query string de un numero, y devuelve toda la secuencia de números hasta
dicho numero. */
  
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    for (let i = 0; i < q.name; i++) {
        res.write(i);
    }
    res.end();
}).listen(3004);
    
