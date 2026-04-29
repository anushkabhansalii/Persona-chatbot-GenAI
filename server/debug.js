require('dotenv').config({ path: '/Users/anushka/Desktop/GenAi-Project1/server/.env' });
const { GoogleGenerativeAI } = require('@google/generative-ai');
const personas = require('/Users/anushka/Desktop/GenAi-Project1/server/personas.js');

async function test() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const generativeModel = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash-latest",
      systemInstruction: personas.anshuman.systemPrompt
    });

    const chat = generativeModel.startChat({
      history: []
    });

    const result = await chat.sendMessage("hello");
    console.log(result.response.text());
  } catch (error) {
    console.error("DEBUG ERROR:", error);
  }
}

test();
