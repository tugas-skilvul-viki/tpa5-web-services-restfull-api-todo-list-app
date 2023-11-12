const User = require("../models/user");

module.exports = {
  getAllUser: async (req, res) => {
    const users = await User.find();

    res.json({
      message: "Berhasil mendapatkan data users",
      data: users,
    });
  },

  getUserById: async (req, res) => {
    const { id } = req.params;
    const users = await User.findById(id);

    res.json(users);
  },

  createUser: async (req, res) => {
    let data = req.body;

    await User.create(data);

    res.json({
      message: "Berhasil membuat data user",
    });
  },

  editUser: async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
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
      });
    }
  },

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
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
