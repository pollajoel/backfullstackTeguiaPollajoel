const image = require("../models/Images")
exports.upload= (req, res, next) =>{
    const host = req.host;
     const filePath = req.protocol + "://" + host + '/' + req.file.path;


    const Image = new image({
        url:filePath
    })

  if(!req.file) {
    res.status(500).send(
        {error:"wrong file name"}
    );
    return next(res.err);
  }



  Image.save().then( data=>{
      return res.send({data:data,url:filePath,status:true})
  }).catch(err=>{
      return res.send({error:err.message,status:false})
  })


}