"use strict";

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

module.exports = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  type User {\n    id: ID!\n    isAdmin:Boolean\n    email:String\n    passWord:String\n    name:String\n    firstName:String\n    adresse:String\n  }\n \n  extend type Query {\n    users: [User]\n    user(id: ID!): User\n  }\n  extend type Mutation{\n  createuser(email:String,passWord:String):User\n  updateUser(id:ID!,email:String,passWord:String):User\n  deleteUser(id:ID!):User\n  }\n  \n"])));