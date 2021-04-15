"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var compagnySchema = Schema({
  denomination: {
    type: String,
    required: true
  },
  Products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  }],
  description: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('compagny', compagnySchema);