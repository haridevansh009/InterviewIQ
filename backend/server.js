const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

const connectDB = require("./config/db");
const interviewRoutes = require("./routes/interviewRoutes");

dotenv.config();

const app = express();


// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// MongoDB
// ===============================

connectDB();


// ===============================
// Gemini AI
// ===============================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});


// ===============================
// Routes
// ===============================

app.get("/", (req, res) => {
  res.send("Interview IQ AI Backend is running!");
});


// Interview routes
app.use("/api/interviews", interviewRoutes);


// ===============================
// AI Chat
// ===============================

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        reply: "Please enter a question.",
      });
    }

    const conversation = [
      ...history,
      {
        role: "user",
        parts: [{ text: message }],
      },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: conversation,

      config: {
        systemInstruction: `
You are Interview IQ AI Assistant.

You are a helpful, friendly and knowledgeable AI assistant.

Your main purpose is to help students and job seekers with:

1. Interview preparation
2. Technical interviews
3. HR interviews
4. Behavioral interviews
5. Java
6. DSA
7. JavaScript
8. React.js
9. Node.js
10. HTML
11. CSS
12. SQL
13. MongoDB
14. Web development
15. Resume preparation
16. ATS preparation
17. Coding problems
18. Project explanations
19. Career preparation
20. General educational questions

Rules:

- Answer the user's actual question directly.
- You can answer general educational questions too.
- Keep explanations clear and easy to understand.
- For coding questions, provide clean and interview-friendly code.
- Explain the code briefly after giving it.
- For interview questions, provide an interview-ready answer.
- If useful, give an example.
- If the user asks a follow-up question, use the previous conversation context.
- Do not unnecessarily repeat the same information.
- If you are unsure about something, say so rather than inventing facts.
- Do not claim that Interview IQ has a feature unless it is actually provided by the application.
- Be concise but complete.
        `,

        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });

    const reply =
      response.text ||
      "Sorry, mujhe iska answer generate nahi ho paya.";

    res.json({
      reply,
    });
  } catch (error) {
    console.error("Gemini API Error:", error);

    res.status(500).json({
      reply:
        "AI Assistant se response nahi aa raha. Please backend aur Gemini API configuration check karein.",
    });
  }
});


// ===============================
// Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Interview IQ Backend running on http://localhost:${PORT}`
  );
});