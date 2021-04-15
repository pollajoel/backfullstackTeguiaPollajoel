const mongoose = require("mongoose")
const Schema = mongoose.Schema


const productsSchema= Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    productType:[
        {
            type:String,
        }
    ],
    maxTarget:{
        type:Number
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    companyProduct:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"compagny"
    },
    categorie:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"categories"
    },
    description:{
        type:String
    },
    imgurl:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"images"
    }

})


module.exports = mongoose.model('Products',productsSchema)