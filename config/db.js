const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb+srv://vikiade00:viki123158@mycluster.805cqec.mongodb.net/db_todo_list"
);

module.exports = db;
