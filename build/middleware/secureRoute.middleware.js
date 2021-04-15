"use strict";

var config = require("../configs");

var jwt = require("jsonwebtoken");

exports.authenticateJWT = function (req, res, next) {
  var authHeader = req.headers.authorization;

  if (authHeader) {
    var token = authHeader.split(' ')[1];

    if (!token) {
      res.status(401).send({
        auth: false,
        message: "missing token, please login"
      });
    }

    jwt.verify(token, config.jwt.secret, function (err, user) {
      if (err) {
        return res.status(403).send({
          auth: false,
          message: "no authorized"
        });
      }

      req.user = user;
      next(); //j'enchaine sur mon contrôlleur
    });
  } else {
    res.status(401).send({
      auth: false,
      message: "missing token, please login"
    });
  }
};