const express = require("express");
const {
  getAllTodo,
  createTodo,
  getTodoById,
  editTodo,
  deleteTodo,
  deleteAllTodo,
} = require("../controller/todo.controller.");
const verifyToken = require("../middleware/auth");
const route = express.Router();

route.get("/", verifyToken, getAllTodo);
route.get("/:id", verifyToken, getTodoById);
route.put("/:id", verifyToken, editTodo);
route.post("/", verifyToken, createTodo);
route.delete("/:id", verifyToken, deleteTodo);
route.delete("/", verifyToken, deleteAllTodo);

module.exports = route;
