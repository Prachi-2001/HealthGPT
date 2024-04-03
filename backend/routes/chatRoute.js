const express = require("express");
const OpenAI = require("openai");
const dotenv = require("dotenv");

const router = express.Router();
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/chat", async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 1,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return res.json(response.data.choices[0].message.content);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
