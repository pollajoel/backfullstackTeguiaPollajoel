"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var OrderSchema = Schema({
  totalAmount: {
    type: Number
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Products'
  }]
});
module.exports = mongoose.model('Order', OrderSchema);