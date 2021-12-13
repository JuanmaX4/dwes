const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/public", (req , res) => {
    res.json({
        mensaje: "Acceso público que permitirá el acceso a invitados"
    });
});

    //primero en el postman tienes que hacer una peticion post para que se genere el token para

app.post("/api/login", (req , res) => {
    const user = {
        id: 1,
        nombre : "Henry",
        email: "henry@email.com"
    }

    jwt.sign({user}, 'secretkey', {expiresIn: '32s'}, (err, token) => {
        res.json({
            token
        });
    });

});


app.post("/api/vip", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "bienvenido usuario vip",
                    authData
                });
        }
    });
});

app.post("/api/admin", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "bienvenido usuario admin",
                    authData
                });
        }
    });
});



        //luego aqui la misma peticion en el postman hacemos un post y en el header ponemos
        //en la key authorization y en el value el token que se nos genero anteriormente con el login

app.post("/api/posts", verifyToken, (req , res) => {

    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                    mensaje: "Post fue creado",
                    authData
                });
        }
    });
});

// Authorization: Bearer <token>
function verifyToken(req, res, next){
     const bearerHeader =  req.headers['authorization'];

     if(typeof bearerHeader !== 'undefined'){
          const bearerToken = bearerHeader.split(" ")[1];
          req.token  = bearerToken;
          next();
     }else{
         res.sendStatus(403);
     }
}

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto: 3000")});