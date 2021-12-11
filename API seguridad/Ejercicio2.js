const express = require('express');
const  bcrypt  =  require ( 'bcrypt' ) ;

const app = express();
const port = 4003;
const hash = '$2b$10$xrzO2R3ob3NJM//IQgWNAuzeHl725PcHF067/kEfSVJBPnXnFtt0q';
const hash2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEyMzR9.ff8Jdw9ijlQn8vWyhUpMZLQpT1Ew88MKISOAQ8JzK2w';

//console.log(hash);

/**1. Realizar un middleware que valide el acceso a través de un token válido (desencriptar el token
con bcrypt)
• Se tomará por acceso válido si el mensaje original es I know your secret. */

// Middlewa que verifica si el usuario es un administrador.
function isAdmin(req, res, next) {
  const { password } = req.headers

  // Cargue el hash de su base de datos de contraseñas. 
    if(bcrypt.compareSync(password, hash)){
      app.get('/admin', (req, res) => {
        res.status(200).send('Bienvenid@, administrador');
      });    
  }
    else{
        res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
    };  
}

function isVip(req, res, next) {
  const { password } = req.headers

  // Cargue el hash de su base de datos de contraseñas. 
    if(bcrypt.compareSync(password, hash2)){
      app.get('/vip', (req, res) => {
        res.status(200).send('Bienvenid@, usuario vip');
      });    
  }
    else{
        res.status(401).send(`Acceso restringido, por favor, incluya la palabra secreta en el parámetro 'password' en la cabera de la petición`);
    };  
}

// Se agrega el middleware en la aplicación.
app.use(isAdmin);

app.use(isVip);

// Ruta a la cual solo deben ingresar usuarios administradores.
app.get('/public', (req, res) => {
    res.status(200).send('Bienvenid@, disfrute del contenido');
});


app.listen(port, () => {
  console.log(`Server listeting on port ${port}`)
});
