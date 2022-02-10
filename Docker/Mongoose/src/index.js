const express = require('express');
const app = express();

const productoRutas = require('./routes/productos')

require('./database')

app.use(express.json())

app.use(productoRutas);

app.listen(3000);

console.log('Server on port 3000');