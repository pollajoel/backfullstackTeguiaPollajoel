"use strict";

var express = require("express");

var router = express.Router();

var users = require("../controllers/user.controller");

var AuthJwt = require("../middleware/secureRoute.middleware");

router.post("/register", users.register);
router.post("/login", users.login);
router.get("/logout", AuthJwt.authenticateJWT, users.logout);
module.exports = router;