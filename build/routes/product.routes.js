"use strict";

var express = require("express");

var router = express.Router();

var product = require("../controllers/product.controller");

router.post("/addProduct", product.Add); //router.get("/allOrder",Order.All)

module.exports = router;