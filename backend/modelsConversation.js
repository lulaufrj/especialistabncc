const mongoose = require("mongoose");

const ConversationSchema = new mongoose.Schema({
  userId: String,
  pergunta: String,
  resposta: String,
  timestamp: { type: Date, default: Date.now },
  tags: String
});

module.exports = mongoose.model("Conversation", ConversationSchema);
