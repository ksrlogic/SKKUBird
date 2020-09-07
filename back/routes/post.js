const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello express");
});

router.post("/", (req, res) => {
  res.json({
    id: 1,
    content: "hello",
  });
});

router.delete("/", (req, res) => {
  res.json({ id: 1 });
});

module.exports = router;
