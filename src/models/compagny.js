const mongoose = require("mongoose")
const Schema = mongoose.Schema
const compagnySchema = Schema({
    denomination: {
        type:String,
        required:true,
        unique:true
    },
    Products:[{
        type:mongoose.Schema.Types.ObjectId,
         ref:"products"
    }]
    ,
    description:{
        type:String
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},
{timestamps: true}
)

module.exports = mongoose.model('compagny',compagnySchema)