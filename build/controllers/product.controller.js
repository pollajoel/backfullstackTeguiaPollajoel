"use strict";

var Product = require("../models/products");

var jwt = require("jsonwebtoken");

var configs = require("../configs");

exports.Add = function (req, res) {
  var product = new Product({
    name: req.body.name,
    price: req.body.price //products:req.body.products,
    //isAdmin: req.isAdmin,

  });
  product.save().then(function (data) {
    res.status(200).send({
      created: true,
      message: "Create success",
      data: data
    });
  })["catch"](function (err) {
    res.status(500).send({
      created: false,
      message: err.message
    });
  });
};