"use strict";

var config = require("../configs");

var PORT = process.env.PORT || config.server.Port;

var express = require("express");

var app = express();

var bodyParser = require('body-parser');

var apiRouter = require("../routes"); //import apiRouter from "../routes"
//var cors = require('cors');


var schema = require("../appolo/schema");

var resolvers = require("../appolo/resolvers");

var _require = require('apollo-server-express'),
    ApolloServer = _require.ApolloServer,
    gql = _require.gql;

var graphQlServer = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers
});
graphQlServer.applyMiddleware({
  app: app,
  path: "/graphql"
});
app.use(bodyParser.json());
app.use('/api/v1', apiRouter); //app.use(cors());

module.exports.start = function () {
  app.listen(PORT, function (err) {
    console.warn("Serveur Listen on port ".concat(PORT));
  });
};