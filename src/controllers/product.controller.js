const Product = require("../models/products")
const jwt   = require("jsonwebtoken")
const configs =  require("../configs")
const productSchemaValidation =require("../middleware/validators/product.validation")


exports.Add = (req,res)=>{

     //console.log(req.file);
    //res.status(200).send({ file:req.file})
     const product = new Product({
         name:req.body.name,
         price:req.body.price,
         description:req.body.description,
         categorie:req.body.categorie,
         image:req.body.image,
         imgurl:req.body.imgurl
        //products:req.body.products,
        //isAdmin: req.isAdmin,
    })

      const validator = productSchemaValidation.validate(product)
    if(!validator)
    {
       return res.status(500).send({error:validator.error,message:"format incorrecte"})
    }


    product.save().then(data=>{
        res.status(200).send({
            created:true,
            message:"Create success",
            data:data
        })

    }).catch(err=>{
        res.status(500).send({
            created:false,
            message:err.message
            }
        )
    })



}

exports.productList = (req,res)=>{
    Product.find({}).populate('categorie').populate('imgurl').then(data=>{
        res.status(200).send({data:data})
    }).catch(err=>{
        res.status(403).send({
            error:err.message
        })
    })
}


exports.deletedProduct = (req,res)=>{
    Product.deleteOne({_id:req.body._id}).then(data=>{

        return res.status( 200 ).send(
            { response:data,status:'utlisateur supprimé...'})
    }).catch(error=>{
        res.status(500).send({message:error.message})
    })
}


exports.search = (req,res)=>{
    Product.find({title:{$regex:"^"+req.params.title},})
}

exports.update = (req,res)=>{
    if(!req.body) {
        return res.status(400).send({
            message:"Data to update can not be empty..."
        })
    }
    const id = req.params.id;
    Product.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update product with id=${id}. Maybe User was not found!`,
                    status:false
                });
            } else return  res.send({ message: "product was updated successfully.",res:data,status:true });
        }).catch(err => {
            res.status(500).send({
                message: "Error updating product with id=" + id
            });
        });

}

exports.findAll = (req, res) => {
  var name = req.query.name;
  var description = req.query.description;
  var condition = name || description ? { name: { $regex: new RegExp(name), $options: "i" },description: { $regex: new RegExp(description), $options: "g" } } : {};
  Product.find(condition)
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
