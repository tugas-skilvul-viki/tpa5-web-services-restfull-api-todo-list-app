const Todo = require("../models/todo");
const User = require("../models/user");

module.exports = {
  // Menampilan seluruh data users
  getAllUser: async (req, res) => {
    try {
      const users = await User.find();

      res.status(200).json({
        message: "Berhasil mendapatkan data users",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error " + error,
      });
    }
  },
  // Menampilan users berdasarkan ID
  getUserById: async (req, res) => {
    const { id } = req.params;

    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error " + error,
      });
    }
  },
  // Create data users
  createUser: async (req, res) => {
    let data = req.body;

    try {
      // Memeriksa apakah username atau email sudah ada
      const periksaUsers = await User.findOne({
        $or: [{ username: data.username }, { email: data.email }],
      });

      if (periksaUsers) {
        return res.status(400).json({
          message: "Gagal membuat data user",
          error: "Username atau email sudah terdaftar.",
        });
      }
      await User.create(data);

      res.status(201).json({
        message: "Berhasil membuat data user",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  // Edit Data Users
  editUser: async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
      // Memeriksa apakah username atau email sudah ada
      const periksaUsers = await User.findOne({
        $and: [
          { _id: { $ne: id } },
          { $or: [{ username: newData.username }, { email: newData.email }] },
        ],
      });

      if (periksaUsers) {
        return res.status(400).json({
          message: "Gagal mengedit data user",
          error: "Username atau email sudah terdaftar.",
        });
      }

      const updatedUser = await User.findByIdAndUpdate(id, newData, {
        new: true,
      });

      if (!updatedUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.json({
        message: "Berhasil mengedit data user",
        data: updatedUser,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  },
  // Delete Data Users
  deleteUser: async (req, res) => {
    const { id } = req.params;

    try {
      const deletedUser = await User.findByIdAndDelete(id);

      if (!deletedUser) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      res.json({
        message: "Berhasil menghapus data user",
        data: deletedUser,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error " + error,
      });
    }
  },

  getUserTodos: async (req, res) => {
    try {
      const { id } = req.params;

      const todos = await Todo.find({ userID: id }).populate("userID", [
        "_id",
        "name",
      ]);

      res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error " + error,
      });
    }
  },
};
