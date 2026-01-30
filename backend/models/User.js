const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: "professor" },
  serie: String,
  disciplina: String,
});

module.exports = mongoose.model("User", UserSchema);
