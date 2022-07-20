const express = require("express");

const router = express.Router();
//get all workourqts
router.get("/", (req, res) => {
  res.json({ mssg: "smells like ys sisters" });
  //get a single workout
  //
  router.get("/:id", (req, res) => {
    res.json({ mssg: "Get a single workout" });
  });
  //Post a new workout
  router.post("/", (req, res) => {
    res.json({ mssg: "POST a new workout" });
  });
  //delete a word
  router.delete("/:id", (req, res) => {
    res.json({ mssg: "DELETE a new workout" });
  });
  //update a record
  router.patch("/:id", (req, res) => {
    res.json({ mssg: "PATCH a new workout" });
  });
});

module.exports = router;
