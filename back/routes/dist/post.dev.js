"use strict";

var express = require("express");

var app = express();
var router = express.Router();
router.get("/", function (req, res) {
  res.send("hello express");
});
router.post("/", function (req, res) {
  res.json({
    id: 1,
    content: "hello"
  });
});
router["delete"]("/", function (req, res) {
  res.json({
    id: 1
  });
});
module.exports = router;