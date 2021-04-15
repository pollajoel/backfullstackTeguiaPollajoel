"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var productsSchema = Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productType: [{
    type: String
  }],
  maxTarget: {
    type: Number
  },
  image: {
    type: String
  },
  description: {
    type: String
  },
  companyProduct: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "compagny"
  }
});
module.exports = mongoose.model('Products', productsSchema);