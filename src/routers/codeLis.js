const express = require("express");
const router = new express.Router();
//
const CodeLis = require("../models/codeLis");
// send all CODE LIS from DB
router.get("/", async (req, res) => {
  try {
    const codeLis = await CodeLis.find();
    res.json(codeLis);
  } catch (error) {
    res.status(400).json({ message: "database empty" });
  }
});
// Route to CREATE a LIS CODE
router.post("/add", async (req, res) => {
  try {
    const codeLis = new CodeLis(req.body);
    await codeLis.save();
    res.json(codeLis);
  } catch (error) {
    res.status(400).json({ message: "Code LIS couldn't be created!" });
  }
});
// Route to READ a LIS CODE
router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const codeLis = await CodeLis.findById(_id);
    res.json(codeLis);
  } catch (error) {
    res.status(200).json({ message: "Couldn't be read" });
  }
});
//Route to UPDATE data in some CODE LIS
router.patch("/:id", async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["description"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation) {
    return res.status(400).json({ message: "invalid updates!" });
  }
  try {
    const codeLis = await CodeLis.findById(req.params.id);
    updates.forEach((update) => (codeLis[update] = req.body[updates]));
    await codeLis.save();
    if (!codeLis) {
      res.status(404).json({ message: "empty" });
    }
    res.status(200).json(codeLis);
  } catch (error) {
    res.status(400).json({ message: "No items had been updated!" });
  }
});
// Route to DELETE a CODE LIS
router.delete("/:id", async (req, res) => {
  try {
    const codeLisDelete = await CodeLis.findByIdAndDelete(req.params.id);
    if (!codeLisDelete) {
      res.status(400).json({ message: "No Code Lis found" });
    }
    res.status(200).json(codeLisDelete);
  } catch (error) {
    res.status(400).json({ message: "item hadn't been deleted!" });
  }
});

module.exports = router;
