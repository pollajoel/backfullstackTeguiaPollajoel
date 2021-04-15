const user    = require("./user.resolver")
const product = require("../resolvers/product.resolver")
const order   = require("../resolvers/order.resolver")

module.exports = [
    user,
    product,
    order,
    //touts les resolvers
]