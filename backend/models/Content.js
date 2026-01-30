const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema({
  title: String,
  link: String,
  serie: String,
  disciplina: String,
  tags: String
});

module.exports = mongoose.model("Content", ContentSchema);
