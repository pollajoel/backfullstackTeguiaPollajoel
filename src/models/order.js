const mongoose = require("mongoose")
const Schema = mongoose.Schema
const OrderSchema = Schema({
    totalAmount:{
        type:Number
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Products'
    }],
    status:{
        type:String,
        default:"En cours."
    }
})
module.exports = mongoose.model('Order',OrderSchema)