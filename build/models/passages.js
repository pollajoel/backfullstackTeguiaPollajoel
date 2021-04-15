"use strict";

var mongoose = require("mongoose");

var schema = mongoose.Schema;
var passages = Schema({
  nbPass: {
    type: Number
  },
  product: {
    type: mongoose.schema.Types.ObjectId,
    ref: 'products'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
module.exports = mongoose.model('Passages', compagnySchema);