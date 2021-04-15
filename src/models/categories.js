const mongoose = require("mongoose")
const Schema = mongoose.Schema;


const categoriesSchema = Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products"
    }]
})

module.exports = mongoose.model('categories',categoriesSchema)