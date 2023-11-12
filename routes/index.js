const express = require("express");
const route = express.Router();
const userRoute = require("./user.route");
route.get("/", (req, res) => {
  res.status(200).json("Welcome to Rest Api Todo List App");
});

route.use("/users", userRoute);

module.exports = route;
