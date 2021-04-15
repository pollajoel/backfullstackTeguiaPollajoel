const express = require("express");
const router = express.Router();
const Order = require("../controllers/order.controller")
const AuthJwt = require("../middleware/secureRoute.middleware")

router.post("/addOrder",AuthJwt.authenticateJWT,Order.Add)
router.get("/allOrder",AuthJwt.authenticateJWT,Order.All)
router.put("/Orderupdate/:id",AuthJwt.authenticateJWT,Order.update)
module.exports = router

