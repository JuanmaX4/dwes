const jwt = require("jsonwebtoken");

// Authorization: Bearer <token>
function verificar(req, res, next){
    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
         const bearerToken = bearerHeader.split(" ")[1];
         req.token  = bearerToken;
         next();
    }
    //login del usuario
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
}

module.exports = { verificar}

