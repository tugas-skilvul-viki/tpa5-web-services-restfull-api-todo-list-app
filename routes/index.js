const express = require("express");
const route = express.Router();

const userRoute = require("./user.route");
const authRoute = require("./auth.route");
const todoRoute = require("./todo.route");

route.get("/", (req, res) => {
  res.status(200).json("Welcome to Rest Api Todo List App");
});

route.use("/users", userRoute);
route.use("/auth", authRoute);
route.use("/todos", todoRoute);

module.exports = route;
