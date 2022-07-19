require("dotenv").config();
const express = require("express");

const app = express();

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//
//
//
//
//express app

// routes
app.get("/", (req, res) => {
  res.json({ msg: "welcome to vim-a-lution" });
});

app.listen(process.env.PORT, () => {
  console.log("listening on port4000");
});
