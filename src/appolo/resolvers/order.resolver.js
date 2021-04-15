const Order = require("../../models/order")
module.exports = {
    Query: {
        orders: () => {
            // .find()
            return Order.find({}).populate("products").populate("user")
        },
        order: (parent, args) => {
            return Order.findById(args.id)
        }
    //mutations // typer dans schema
        //createProduct
        // updateProduct
        // etc...
    }
}