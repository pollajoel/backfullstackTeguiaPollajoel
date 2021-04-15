const mongoose = require("mongoose")
const Schema = mongoose.Schema
const ImageSchema = Schema({
    url:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model('images',ImageSchema)