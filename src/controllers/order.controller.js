const Order = require("../models/order")
//const jwt   = require("jsonwebtoken")
//const configs =  require("../configs")


exports.Add = (req,res)=>{

     const order = new Order({
        totalAmount:req.body.totalAmount,
        user:req.body.user,
        products:req.body.products,
         status:req.body.status
        //isAdmin: req.isAdmin,
    })

    order.save().then(data=>{
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


exports.All = (req,res)=>{

    Order.find({}).populate('products').populate("user").then((response)=>{
        res.status(200).send({
            status:true,
            data:response
        })
    }).catch(err=>{
        res.status(500).send({
            status:false,
            data:err.message
        })
    })
}


exports.update = (req,res)=>{
    if(!req.body) {
        return res.status(400).send({
            message:"Data to update can not be empty..."
        })
    }
    const id = req.params.id;
    Order.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Cannot update Order with id=${id}. Maybe Order was not found!`,
                    status:false
                });
            } else return  res.send({ message: "Order was updated successfully.",res:data,status:true });
        }).catch(err => {
            res.status(500).send({
                message: "Error updating order with id=" + id
            });
        });

}