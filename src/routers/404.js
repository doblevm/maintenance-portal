const express = require("express");
const router = new express.Router();

router.get("*", (req, res) => {
  res.status(404).json({ content: "404 Page" });
});

module.exports = router;
