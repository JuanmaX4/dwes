const express = require('express');

const loaders = require('./loaders');
const logger = require('./utils/logger');
const router = require('./routes');
const server = express();

const port = 3001;

loaders.init(server);

server.listen(port, () => {
  logger.info(`Example app listening on ${port}`)
});