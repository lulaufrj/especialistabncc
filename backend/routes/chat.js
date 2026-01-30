const express = require("express");
const router = express.Router();
const Conversation = require("../models/Conversation");
const axios = require("axios");

router.post("/ask", async (req, res) => {
  const { userId, pergunta, serie, disciplina } = req.body;
  try {
    const prompt = `Responda detalhadamente com base na BNCC para ${serie}, disciplina ${disciplina}: ${pergunta}`;
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-5-mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 500
    }, {
      headers: { "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` }
    });
    const resposta = response.data.choices[0].message.content;

    const conv = new Conversation({ userId, pergunta, resposta, tags: `${serie}-${disciplina}` });
    await conv.save();

    res.json({ resposta });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
