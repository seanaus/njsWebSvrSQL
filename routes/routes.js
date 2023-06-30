"use strict";
const express = require("express");
const router = express.Router();
const routeController = require("../controllers/routeController");

router.get("/getData", routeController.getData);

module.exports = {
    routes: router,
}