"use strict";
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const cookieParser = require('cookie-parser');
const routes = require("./routes/routes.js");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use("/api/", routes.routes);

app.listen(8080, () => {
    console.log(`App listening on ${8080}.......`);
});
