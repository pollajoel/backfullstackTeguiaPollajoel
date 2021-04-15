const express = require("express");
const router = express.Router();
const serverStorage = require("../middleware/serverStorage.middleware")
const upload = require("../controllers/uploadimages.controller")

router.post('/upload',serverStorage.server.single('file'),upload.upload)
//router.get("/allOrder",Order.All)
module.exports = router