const express = require('express');
const morgan = require('morgan');
const app = express();

//settings  //por si este puerto se esta utilizando he puesto el process.env.PORT
app.set('port', process.env.PORT || 3000);
app.set('json espacios', 2)

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use(require('./src/routes/index'));
app.use(require('./src/routes/usuario'));


// iniciando el serve
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});


/*
const port = 3001;
loaders.init(server);

server.listen(port, () => {
  logger.info(`Example app listening on ${port}`)
});*/