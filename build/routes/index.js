"use strict";

var express = require('express');
var router = express.Router();
var userRouter = require("./users.routes");
var orderRouter = require("./order.routes");
var productsRouter = require("./product.routes");
var sendinblue = require("./sendinblue.routes");


router.use(sendinblue);
router.use(userRouter);
router.use(orderRouter);
router.use(productsRouter);


module.exports = router;
