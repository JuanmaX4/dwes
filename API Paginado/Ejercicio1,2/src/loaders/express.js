const express = require('express');


const routes = require('../routes');

module.exports = (server) => {
    server.use(routes);
    server.use((req, res) => res.status(404).send({ message: 'Not Found' }));
};
