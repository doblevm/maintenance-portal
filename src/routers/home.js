const express = require("express");
const router = new express.Router();

router.get("/", (req, res) => {
  res.json({ content: "main page" });
});

module.exports = router;
