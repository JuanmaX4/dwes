const express = require('express');
const morgan = require('morgan');
const app = express();
const routes = require('./src/routes');

//settings  //por si este puerto se esta utilizando he puesto el process.env.PORT
app.set('port', process.env.PORT || 4000);
app.set('json espacios', 2)

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



app.use(routes);


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