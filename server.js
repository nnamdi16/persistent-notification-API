/* eslint-disable prettier/prettier */
"use strict";

/*
 * nodejs-express-mongoose
 * Copyright(c) 2019 Nwabuokei Nnamdi
 * MIT Licensed
 */

/**
 * Module dependencies
 */

require("dotenv").config();

// const fs = require("fs");
// const join = require("path").join;
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const config = require("./config/env/development");
const router = require("./config/routes");
// const { handleError } = require("./app/middleware/errorHandler");

// const models = join(__dirname, "app/models");
// const port = process.env.PORT || 3000;

const app = express();
const connection = connect();

/**
 * Expose
 */

module.exports = {
    app,
    connection
};

// // Bootstrap models
// fs.readdirSync(models)
//   .filter(file => ~file.indexOf(".js"))
//   .forEach(file => require(join(models, file)));

// Bootstrap routes
require("./config/passport")(passport);
require("./config/express")(app, passport);
// require("./config/routes")(router, passport);

app.use("/", router);
// app.use((err, req, res, next) => {
//   handleError(err, res);
//   next();
// });
connection.on("error", console.log).once("open", listen);
app.get("/", function(req, res) {
    res.status(200).sendFile(__dirname + "/index.html");
});
//  .on("disconnected", connect)
function listen() {
    if (app.get("env") === "test") return;
    app.listen(config.PORT);
    console.log(`Express app started on port${config.PORT}`);
}

function connect() {
    var options = {
        // keepAlive: 1,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        ignoreUndefined: true
    };
    mongoose.connect(config.MONGODB_URL, options, () => {
        console.log("We are connected");
    });
    return mongoose.connection;
}