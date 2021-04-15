"use strict";

var User = require("../../models/user");

module.exports = {
  Query: {
    users: function users() {
      // .find()
      return User.find({});
    },
    user: function user(parent, args) {
      return User.findById(args.id);
    } //mutations // typer dans schema
    //createProduct
    // updateProduct
    // etc...

  },
  Mutation: {
    createuser: function createuser(parent, args) {
      var userNew = new User({
        //name:args.name,
        //firstName:args.firstname,
        passWord: args.passWord,
        email: args.email //,
        //adresse:args.adresse,
        //phoneNumber:args.phoneNumber

      });
      return userNew.save();
    },
    updateUser: function updateUser(parent, args) {}
  }
};