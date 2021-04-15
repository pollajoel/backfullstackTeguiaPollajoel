"use strict";

var user = require("./user.resolver");

var product = require("../resolvers/product.resolver");

var order = require("../resolvers/order.resolver");

module.exports = [user, product, order //touts les resolvers
];