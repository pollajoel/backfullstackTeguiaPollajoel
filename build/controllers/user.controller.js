"use strict";

var User = require("../models/user");

var jwt = require("jsonwebtoken");

var bcrypt = require('bcrypt');

var config = require('../configs');

exports.register = function (req, res) {
  var hashedPassword = bcrypt.hashSync(req.body.passWord, 10);
  var user = new User({
    name: req.body.name,
    firstName: req.body.firstname,
    passWord: hashedPassword,
    email: req.body.email,
    adresse: req.body.adresse,
    phoneNumber: req.body.phoneNumber,
    civility: req.body.civility,
    isAdmin: req.body.isAdmin //isAdmin: req.isAdmin,

  });
  user.save().then(function (data) {
    var userToken = jwt.sign({
      id: data._id,
      admin: data.isAdmin
    }, config.jwt.secret, {
      expiresIn: 86400
    });
    res.send({
      auth: true,
      Token: userToken
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "some error occurred"
    });
  });
};

exports.login = function (req, res) {
  User.findOne({
    email: req.body.email
  }).then(function (user) {
    var passwordIsValid = bcrypt.compareSync(req.body.passWord, user.passWord);

    if (!passwordIsValid) {
      res.status(401).send({
        error: true,
        token: null
      });
    }

    var userToken = jwt.sign({
      id: user._id,
      admin: user.isAdmin
    }, config.jwt.secret, {
      expiresIn: 86400
    });
    res.status(200).send({
      error: false,
      accessToken: userToken
    });
  })["catch"](function (err) {
    res.send(err);
  });
};

exports.logout = function (req, res) {
  console.log(req.user);
  res.status(200).send({
    auth: true,
    accessToken: null,
    id: req.user.id
  });
};