const express = require("express");
const route = express.Router();

const { login, regis } = require("../controller/auth.controller");

route.post("/login", login);
route.post("/regis", regis);

module.exports = route;
