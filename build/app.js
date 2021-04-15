"use strict";

require('dotenv').config();

var apps = require("./services/server.service");

var mongoService = require("./services/mongoose.service");

mongoService.dbConnect();
apps.start();