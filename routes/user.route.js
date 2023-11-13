const express = require("express");
const {
  getAllUser,
  createUser,
  getUserById,
  editUser,
  deleteUser,
  getUserTodos,
} = require("../controller/user.controller");
const route = express.Router();
const verifyToken = require("../middleware/auth");

route.get("/", getAllUser);
route.get("/:id", verifyToken, getUserById);
route.get("/:id/todos", verifyToken, getUserTodos);
route.put("/:id", verifyToken, editUser);
route.post("/", verifyToken, createUser);
route.delete("/:id", verifyToken, deleteUser);

module.exports = route;
