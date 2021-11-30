const express = require('express');
const  bcrypt  =  require ( 'bcrypt' ) ;

const app = express();
const port = 4003;
const hash = '$2b$10$xrzO2R3ob3NJM//IQgWNAuzeHl725PcHF067/kEfSVJBPnXnFtt0q';
//console.log(hash);

/**1. Realizar un middleware que valide el acceso a través de un token válido (desencriptar el token
con bcrypt)
• Se tomará por acceso válido si el mensaje original es I know your secret. */

// Middlewa que verifica si el usuario es un administrador.
function isAdmin(req, res, next) {
  const { password } = req.headers

  // Cargue el hash de su base de datos de contraseñas. 
    if(bcrypt.compareSync(password, hash)){
        next();
    }
    else{
        res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
    };  
}

// Se agrega el middleware en la aplicación.
app.use(isAdmin);

// Ruta a la cual solo deben ingresar usuarios administradores.
app.get('/', (req, res) => {
    res.status(200).send('Bienvenid@, disfrute del contenido');
});

app.listen(port, () => {
  console.log(`Server listeting on port ${port}`)
});
