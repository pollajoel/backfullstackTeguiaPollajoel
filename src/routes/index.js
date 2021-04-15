const express = require('express');
const router = express.Router();
const userRouter = require("./users.routes")
const orderRouter = require("./order.routes")
const productsRouter = require("./product.routes")
const categories = require("./categories.routes")
const upload = require("./uploadImages.routes")

router.use(categories)
router.use(upload)
router.use( userRouter )
router.use( orderRouter)
router.use( productsRouter)
module.exports = router