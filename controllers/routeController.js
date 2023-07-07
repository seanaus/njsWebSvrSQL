"use strict";
const routeService = require("../services/routeService");

const getData = async (req, res) => {
    res.json(await routeService.getData(req))
}

module.exports = {
    getData
}