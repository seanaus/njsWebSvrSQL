"use strict";
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const cookieParser = require('cookie-parser');
const routes = require("./routes/routes.js");
const configService = require("./services/configService.js");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/api/", routes.routes);

app.listen(configService.port, () => {
    console.log(`App listening on ${configService.port}.......`);
});
