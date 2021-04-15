"use strict";

var Products = require("../../models/products");

module.exports = {
  Query: {
    products: function products() {
      // .find()
      return Products.find({});
    },
    product: function product(parent, args) {
      return Products.findById(args.id);
    } //mutations // typer dans schema
    //createProduct
    // updateProduct
    // etc...

  }
};