const User = require("../../models/user")

class userContain{
    constructor(id, {isAdmin,email,passWord, name, firstName,adresse}) {
    this.id = id;
    this.isAdmin = isAdmin;
    this.email = email;
    this.passWord = passWord;
    this.name= name;
    this.firstName=firstName;
    this.adresse= adresse;
    }
}

module.exports = {
    Query: {
        users: () => {
            // .find()
            return User.find({})
        },
        user: (parent, args) => {
            return User.findById(args.id)
        }
    //mutations // typer dans schema
        //createProduct
        // updateProduct
        // etc...
    },
    Mutation:{
        createuser:(parent,args)=>{
            const userNew = new User({
                //name:args.name,
                //firstName:args.firstname,
                passWord:args.passWord,
                email:args.email//,
                //adresse:args.adresse,
                //phoneNumber:args.phoneNumber
            })
            return userNew.save()
        },
        updateUser:(parent,args)=>{



           const  useri = new userContain(args.id,args.input)

            const userNew = new User(useri)
            return userNew.save()


        }


    }

}