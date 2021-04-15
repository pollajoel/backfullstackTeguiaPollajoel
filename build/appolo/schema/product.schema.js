"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    \n    type Product {\n        id: ID!\n        name: String\n        price: Float\n        maxTarget: Float\n        image: String\n        description: String\n    }\n    \n   \n     extend type Query {\n        products: [Product]\n        product(id: ID!): Product\n     }\n\n\n\n\n"])));