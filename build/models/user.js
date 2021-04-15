"use strict";

var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var UserSchema = Schema({
  isAdmin: {
    type: Boolean
  },
  userName: {
    type: String //required:true,

  },
  name: {
    type: String //required:true,

  },
  firstName: {
    type: String //required:true,

  },
  lastName: {
    type: String //required:true,

  },
  passWord: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  adresse: [{
    city: {
      type: String
    },
    country: {
      type: String
    },
    ZipCode: {
      type: String
    }
  }],
  phoneNumber: {
    type: String
  },
  civility: {
    type: String
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products"
  }],
  compagny: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "compagny"
  }]
});
module.exports = mongoose.model('User', UserSchema);