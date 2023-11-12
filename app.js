const express = require("express");
const db = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

db.then(() => {
  console.log("Berhasil konek ke mongoose");
}).catch((error) => {
  console.log("Gagal konek ke mongoose " + error);
});

app.use(express.json());

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
