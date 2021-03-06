/**
 * Created by rishabhkhanna on 26/07/18.
 */
const express = require('express');
const app = express();
const model = require('./db/models');
const routes = require("./routes/api");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api", routes);

module.exports = app;




