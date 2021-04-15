const mongoose = require("mongoose")

const Schema = mongoose.Schema


const UserSchema = Schema({
	
	
	isAdmin:{
		type:Boolean,
	},
    age:{
	    type:Number,
    },
    userName:{
        type:String,
        //required:true,
    },
    name:{
        type:String,
        //required:true,
    },
    firstName:{
        type:String,
        //required:true,
    },
    lastName:{
        type:String,
        //required:true,
    },
    passWord:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        dropDups: true
    },
    adresse:[
        {
            city:{
                type:String,
            },
            country:{
                type:String
            },
            ZipCode:{
                type:String
            },
            adressei:{
                type:String
            }
        }
    ],
    phoneNumber:{
        type:String
    },
    civility:{
        type:String
    },

    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"products"
    }],
    compagny:[{
	    type:mongoose.Schema.Types.ObjectId,
        ref:"compagny"
    }]

},{ timestamps: true })

module.exports = mongoose.model('User',UserSchema)