"use strict";

var Order = require("../../models/order");

module.exports = {
  Query: {
    orders: function orders() {
      // .find()
      return Order.find({}).populate("products").populate("user");
    },
    order: function order(parent, args) {
      return Order.findById(args.id);
    } //mutations // typer dans schema
    //createProduct
    // updateProduct
    // etc...

  }
};