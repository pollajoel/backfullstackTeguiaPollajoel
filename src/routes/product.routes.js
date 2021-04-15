const express = require("express");
const router = express.Router();
const product = require("../controllers/product.controller")
const serverStorage = require("../middleware/serverStorage.middleware")

router.post("/addProduct",product.Add)
router.get("/productList",product.productList)
router.post("/productdeleted",product.deletedProduct)
router.put("/productupdate/:id",product.update)
router.get("/product/findall",product.findAll);

router.post('/uploads',serverStorage.server.single('file'),function(req, res, next) {
  console.log(req.file);
  if(!req.file) {
    res.status(500);
    return next(err);
  }
 // const host = req.files.fileuploaded.name;
  //const filePath = req.protocol + "://" + host + '/' + req.file.path;
  res.json({ fileUrl: req.file.path,exist:false });

})
//router.get("/allOrder",Order.All)
module.exports = router
