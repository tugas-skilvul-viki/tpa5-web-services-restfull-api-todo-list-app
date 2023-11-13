const Todo = require("../models/todo");

module.exports = {
  getAllTodo: async (req, res) => {
    try {
      const todos = await Todo.find().populate("userID", ["_id", "name"]);
      res.json({
        message: "Berhasil mendapatkan data todo",
        data: todos,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mendapatkan data todo" + error, // Menambahkan pesan kesalahan ke dalam respons
      });
    }
  },

  getTodoById: async (req, res) => {
    const { id } = req.params;

    try {
      const todo = await Todo.findById(id).populate("userID", ["_id", "name"]);
      if (!todo) {
        return res.status(404).json({
          message: "Id not found",
        });
      }

      res.json(todo);
    } catch (error) {
      res.status(500).json({
        message: "Gagal mendapatkan data todo" + error,
      });
    }
  },

  createTodo: async (req, res) => {
    let data = req.body;

    try {
      await Todo.create(data);
      res.json({
        message: "Berhasil membuat data todo",
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal membuat data todo" + error,
      });
    }
  },

  editTodo: async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
      const updatedTodo = await Todo.findByIdAndUpdate(id, newData, {
        new: true,
      }).populate("userID", ["_id", "name"]);

      if (!updatedTodo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }

      res.json({
        message: "Berhasil mengedit data todo",
        data: updatedTodo,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal mengedit data todo" + error,
      });
    }
  },

  deleteTodo: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedTodo = await Todo.findByIdAndDelete(id);

      if (!deletedTodo) {
        return res.status(404).json({
          message: "Todo not found",
        });
      }

      res.json({
        message: "Berhasil menghapus data todo",
        data: deletedTodo,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus data todo" + error,
      });
    }
  },

  deleteAllTodo: async (req, res) => {
    try {
      // Menghapus semua data todo
      const result = await Todo.deleteMany({});
      res.json({
        message: "Berhasil menghapus semua data todo",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        message: "Gagal menghapus semua data todo" + error,
      });
    }
  },
};
