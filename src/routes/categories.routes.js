const express = require("express");
const router = express.Router();
const categories = require("../controllers/categories.controller")
const AuthJwt = require("../middleware/secureRoute.middleware")

router.post("/addcategorie",categories.AddCategories)
router.get("/catlist",categories.listCategories)
router.post("/deleteCat",categories.Delete)
module.exports = router
