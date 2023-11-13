require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

module.exports = {
  // Login
  login: async (req, res) => {
    const userLogin = req.body;

    try {
      const user = await User.findOne({ email: userLogin.email });
      if (!user) {
        res.status(404).json("Invalid Users");
        return;
      }

      if (user.password !== userLogin.password) {
        res.status(404).json("Invalid Users");
        return;
      }

      const token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.JWT_KEY
      );

      res.status(201).json({
        message: "login successfull",
        userId: user._id,
        token,
      });
    } catch (error) {
      res.status(500).json("Internal Server Error " + error);
    }
  },
  // Registrasi
  regis: async (req, res) => {
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
};
