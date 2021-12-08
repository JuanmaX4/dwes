const express = require("express");

const router = require("./routes");
const { port } = require("./config");
const loaders = require("./loaders");
const server = express();

loaders.init(server);
server.listen(port, () => {});
