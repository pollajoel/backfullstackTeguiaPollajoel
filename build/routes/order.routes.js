"use strict";

var express = require("express");
var router = express.Router();
var Order = require("../controllers/order.controller");

router.post("/addOrder", Order.Add);
router.get("/allOrder", Order.All);
module.exports = router;