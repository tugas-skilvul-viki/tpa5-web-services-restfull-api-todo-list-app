const express = require("express");
const {
  getAllUser,
  createUser,
  getUserById,
  editUser,
  deleteUser,
} = require("../controller/user.controller");
const route = express.Router();

route.get("/", getAllUser);
route.get("/:id", getUserById);
route.put("/:id", editUser);
route.post("/", createUser);
route.delete("/:id", deleteUser);

module.exports = route;
