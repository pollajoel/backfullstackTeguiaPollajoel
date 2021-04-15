const categories = require("../models/categories")
const categorieSchema = require('../middleware/validators/categorie.validation')


exports.AddCategories = (req, res)=>{

    //return res.send({message:"teste"})

    const cat = new categories({
        title:req.body.title,
        products:req.body.products,
    })

    const validation = categorieSchema.validate(cat)
    if( validation.err )
    {
         return res.status(400).send(validation.error)
    }

    cat.save().then(data=>{
        res.status(200).send({data:data})
        }).catch(err=>{
            res.status(403).send({error:err.message})
        })

}

exports.listCategories = (req,res)=>{
    categories.find({}).populate('products').then(data=>{
        res.status(200).send({data:data})
    }).catch(err=>{
        res.status(403).send({
            error:err.message
        })
    })
}


exports.Delete = (req,res)=>{

    const categore_id = req.body.id;

    categories.findByIdAndRemove(req.body).then(data=>{
        return res.status( 200 ).send(
            { response:data,status:'categorie supprimée'})
    }).catch(error=>{
        res.status(500).send({message:error.message})
    })

}

