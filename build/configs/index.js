"use strict";

var bd = require("./db.config");

var server = require("./server.config");

var jwt = require("./jwt.config");

module.exports.database = bd;
module.exports.server = server;
module.exports.jwt = jwt;