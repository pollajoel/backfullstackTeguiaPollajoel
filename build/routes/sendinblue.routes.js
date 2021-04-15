const express = require("express");
const router  = express.Router();
const sendingBlue = require("../controllers/sendinblue.controller");

router.post("/Sendigblue",sendingBlue.Add);
module.exports = router;