require('dotenv').config()
const moongose = require("mongoose")
const config = require("../configs")
const uri = config.database.url

module.exports.dbConnect=()=>{
    moongose.connect(process.env.DBHOST,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("Connection Success..")
    }).catch((error)=>{
        console.log(error)
        process.exit(1)
    })
}