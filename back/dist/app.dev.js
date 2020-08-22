"use strict";

var express = require("express");

var app = express();
app.get("/", function (req, res) {
  res.send("hello express");
});
app.listen(3065, function () {
  console.log("server is running");
});