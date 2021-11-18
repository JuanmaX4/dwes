const express = require('express');

const logger = require('./src/utils/logger');
const loaders = require('./src/loaders');
const router = require('./src/routes');
const server = express();

const port = 3001;

loaders.init(server);

server.listen(port, () => {
  logger.info(`Example app listening on ${port}`)
});