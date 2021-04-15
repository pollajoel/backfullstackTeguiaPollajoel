const User = require("../models/user");
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt');
const config = require('../configs');
const UservalidationSchema = require('../middleware/validators/user.validation')



exports.register = (req,res)=>{

    const hashedPassword = bcrypt.hashSync(req.body.passWord, 10);
    const user = new User({
        name:req.body.name,
        firstName:req.body.firstName,
        passWord:hashedPassword,
        email:req.body.email,
        adresse:req.body.adresse,
        phoneNumber:req.body.phoneNumber,
        civility:req.body.civility,
        isAdmin:req.body.isAdmin,
        //isAdmin: req.isAdmin,
    })

    /*
    const validation = UservalidationSchema.validate(user)
    if( validation.error)
    {
        return res.status(400).send(validation.error)
    }

     */

    user.save().then(data=>{

        let userToken = jwt.sign({
         id:data._id,
         admin:data.isAdmin   
        },
        config.jwt.secret,{expiresIn:86400})
        res.send({
            auth:true,
            Token:userToken
        })

    }).catch(err =>{
        res.status(500).send({
            message:err.message || "some error occurred"
        })
    })
}



exports.Delete = (req,res)=>{

    User.deleteOne({_id:req.body._id}).then(data=>{

        return res.status( 200 ).send(
            { response:data,status:'utlisateur supprimé...'})
    }).catch(error=>{
        res.status(500).send({message:error.message})
    })

}


exports.login = (req, res) => {

    User.findOne({
            email: req.body.email,
        }).then((user) => {

            let passwordIsValid = bcrypt.compareSync(
                req.body.passWord, user.passWord
            );

            //res.send({message:'hello world'})


            if (!passwordIsValid) {
                return res.status(404).send({
                    error: true,
                    token: null,
                });
            }
            let userToken = jwt.sign(
                {
                    id: user._id,
                    admin: user.isAdmin,
                },
                config.jwt.secret,
                {
                    expiresIn: 86400,
                }
            );

            return res.status(200).send({
                error: false,
                accessToken: userToken,
            });
        }).catch((err) => {
                res.send(err);
            });

};
  

exports.users = (req, res)=>{
    User.find({}).then(data=>{
        return res.status(200).send({data:data})
    }).catch(error=>{
        return res.send({error:error.message})
    })
}




exports.logout = (req, res) => {
    ///console.log( req.user )
  res.status(200).send({
      auth: true,
      accessToken: null,
      id:req.user.id
  });
}


exports.user = (req, res)=>{

     User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `user not found with id ${req.params.id}`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      return res.status(404).send({
        message: err.message,
      });
    });
}


exports.update = (req,res)=>{
    if(!req.body) {
        return res.status(400).send({
            message:"Data to update can not be empty..."
        })
    }
    if( req.body.passWord)
    req.body.passWord = bcrypt.hashSync(req.body.passWord, 10);
    const id = req.params.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update User with id=${id}. Maybe User was not found!`,
                    status:false
                });
            } else{
                let userToken = jwt.sign({
                        id:req.params.id,
                        admin: req.body.isAdmin
                    },
                    config.jwt.secret,{expiresIn:86400})
        res.send({
            auth:true,
            Token:userToken,
            message: "User was updated successfully.",res:data,status:true
        })
            }
        }).catch(err => {
            res.status(500).send({
                message: "Error updating user with id=" + id
            });
        });

}


exports.findAll = (req, res) => {
  var email = req.query.email;
  var condition = email ? { email: { $regex: new RegExp(email), $options: "i" } } : {};
  User.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product."
      });
    });
};


