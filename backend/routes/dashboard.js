const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Conversation = require("../models/Conversation");
const Content = require("../models/Content");

router.get("/stats", async (req, res) => {
  try {
    const totalUsers = await User.countDocuments();
    const totalConvs = await Conversation.countDocuments();
    const totalContents = await Content.countDocuments();
    res.json({ totalUsers, totalConvs, totalContents });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
