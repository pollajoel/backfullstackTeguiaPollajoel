const Products = require("../../models/products")
module.exports = {
    Query: {
        products: () => {
            // .find()
            return Products.find({})
        },
        product: (parent, args) => {
            return Products.findById(args.id)
        }
    //mutations // typer dans schema
        //createProduct
        // updateProduct
        // etc...
    }
}