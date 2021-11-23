const express = require('express');
const app = express();
const port = 4003;

// Middlewa que verifica si el usuario es un administrador.
function isAdmin(req, res, next) {
  const { password } = req.headers;
  if (password && password === 'patata') {
    next();
  } else {
    res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
  }
}

// Permite recibir parámetros en formato JSON.
app.use(express.json());

// Se agrega el middleware en la aplicación.
app.use(isAdmin);

// Ruta a la cual solo deben ingresar usuarios administradores.
app.get('/', (req, res) => {
    res.status(200).send('Bienvenid@, disfrute del contenido');
});

app.listen(port, () => {
  console.log(`Server listeting on port ${port}`)
});
