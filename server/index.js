require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const personas = require('./personas');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

if (!process.env.GEMINI_API_KEY) {
  console.error("Missing GEMINI_API_KEY in environment variables.");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/chat', async (req, res) => {
  try {
    const { message, persona, history } = req.body;

    if (!message || !persona) {
      return res.status(400).json({ error: "Message and persona are required." });
    }

    const selectedPersona = personas[persona.toLowerCase()];
    if (!selectedPersona) {
      return res.status(400).json({ error: "Invalid persona selected." });
    }

    const generativeModel = genAI.getGenerativeModel({ 
      model: "gemini-flash-latest",
      systemInstruction: selectedPersona.systemPrompt
    });

    const chatHistory = (history || []).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    const chat = generativeModel.startChat({
      history: chatHistory
    });

    const result = await chat.sendMessage(message);
    const responseText = result.response.text();

    res.json({ reply: responseText });
  } catch (error) {
    console.error("Chat Error:", error);
    res.status(500).json({ error: error.message || "An error occurred while communicating with the AI." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
