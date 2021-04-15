"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    type Order {\n        id:ID!,\n        totalAmount: Float,\n        products:[ID]\n        user: User\n    }\n    input OderInput {\n        id:ID!,\n        totalAmount: Float\n        products:[ID]\n        user:ID!\n    } \n    \n     extend type Query {\n        orders: [Order]\n        order(id: ID!): Order\n     }\n\n"])));