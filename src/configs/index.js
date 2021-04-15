const bd = require("./db.config")
const server  = require("./server.config")
const jwt = require("./jwt.config")

module.exports.database=bd;
module.exports.server=server;
module.exports.jwt=jwt;