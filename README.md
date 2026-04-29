# Persona-Based AI Chatbot

A full-stack AI chatbot application that allows users to interact with three distinct personas (Anshuman Singh, Abhimanyu Saxena, and Kshitij Mishra) using the Gemini API.

## Features
- **Persona Switcher:** Seamlessly switch between three unique mentors with customized system prompts.
- **Dynamic Context:** The conversation resets when a new persona is selected.
- **Modern UI:** A stunning, responsive Dark Mode interface built with Vanilla CSS.
- **Robust Error Handling:** Graceful API error states.
- **Typing Indicators & Suggestion Chips:** Enhances user experience and provides quick-start questions tailored to each persona.

## Tech Stack
- **Frontend:** React.js, Vanilla CSS
- **Backend:** Node.js, Express.js
- **AI Integration:** Google Gemini API (`@google/generative-ai`)

## Setup Instructions

### 1. Clone the Repository
\`\`\`bash
git clone <your-repo-url>
cd GenAi-Project1
\`\`\`

### 2. Backend Setup
1. Navigate to the `server` directory:
   \`\`\`bash
   cd server
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Create a `.env` file by copying the example:
   \`\`\`bash
   cp .env.example .env
   \`\`\`
4. Add your Gemini API key to the `.env` file:
   \`\`\`env
   GEMINI_API_KEY=your_real_api_key_here
   PORT=5001
   \`\`\`
5. Start the backend server:
   \`\`\`bash
   npm start
   \`\`\`

### 3. Frontend Setup
1. Open a new terminal tab and navigate to the `client` directory:
   \`\`\`bash
   cd client
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Start the React development server:
   \`\`\`bash
   npm run dev
   \`\`\`

### 4. Usage
Open your browser and navigate to \`http://localhost:3000\`. You can now select a persona and start chatting!

## Deployment
*(Add your live deployed link here once hosted on Vercel/Railway)*
