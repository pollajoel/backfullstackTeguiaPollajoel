"use strict";

var Order = require("../models/order");

var jwt = require("jsonwebtoken");

var configs = require("../configs");

exports.Add = function (req, res) {
  var order = new Order({
    totalAmount: req.body.totalAmount,
    user: req.body.user,
    products: req.body.products //isAdmin: req.isAdmin,

  });
  order.save().then(function (data) {
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

exports.All = function (req, res) {
  Order.find({}).populate('products').populate("user").then(function (response) {
    res.status(200).send({
      status: true,
      data: response
    });
  })["catch"](function (err) {
    res.status(500).send({
      status: false,
      data: err.message
    });
  });
};