import React, { useState } from "react";
import "./StudyMaterial.css";

function StudyMaterial() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      id: "hr",
      title: "HR Questions",
      icon: "👥",
      description:
        "Prepare for common HR and behavioral interview questions.",
      questions: [
        "Tell me about yourself.",
        "What are your strengths and weaknesses?",
        "Why should we hire you?",
        "Why do you want to join our company?",
        "Where do you see yourself in 5 years?",
        "Why did you choose Computer Science?",
        "Tell me about your biggest achievement.",
        "How do you handle pressure?",
        "Why should we select you over other candidates?",
        "Do you have any questions for us?",
      ],
    },
    {
      id: "managerial",
      title: "Managerial Questions",
      icon: "💼",
      description:
        "Practice leadership, teamwork, decision-making and management questions.",
      questions: [
        "How do you handle conflicts within a team?",
        "How do you prioritize multiple tasks?",
        "Tell me about a time you worked in a team.",
        "How do you handle a difficult team member?",
        "How do you manage deadlines?",
        "Describe a situation where you took leadership.",
        "How do you respond to constructive criticism?",
        "What would you do if your team missed a deadline?",
        "How do you make important decisions?",
        "How do you motivate your team?",
      ],
    },
    {
      id: "technical",
      title: "Technical Questions",
      icon: "💻",
      description:
        "Revise important technical questions for software development interviews.",
      questions: [
        "What is OOP? Explain its four principles.",
        "What is the difference between Java and JavaScript?",
        "What is React.js?",
        "What are React components?",
        "What is the Virtual DOM?",
        "What is Node.js?",
        "What is Express.js?",
        "What is MongoDB?",
        "What is the difference between SQL and NoSQL?",
        "What is an API?",
        "What is REST API?",
        "What is Git and GitHub?",
        "What is a primary key in SQL?",
        "What is normalization?",
        "What is the difference between GET and POST?",
      ],
    },
    {
      id: "aptitude",
      title: "Aptitude Questions",
      icon: "🧠",
      description:
        "Practice quantitative aptitude, logical reasoning and basic problem solving.",
      questions: [
        "If a number is increased by 20% and then decreased by 20%, what is the net change?",
        "A train travels 120 km in 2 hours. What is its average speed?",
        "Find the next number: 2, 4, 8, 16, ?",
        "If 5 workers complete a task in 10 days, how many days will 10 workers take?",
        "What is the probability of getting a head when a fair coin is tossed?",
        "Find the average of 10, 20, 30, 40 and 50.",
        "A product costs ₹500 and is sold for ₹600. Find the profit percentage.",
        "If A can complete a task in 10 days and B in 15 days, how long will they take together?",
        "Find the LCM of 12 and 18.",
        "Find the HCF of 24 and 36.",
      ],
    },
  ];

  const toggleCategory = (id) => {
    setOpenCategory(openCategory === id ? null : id);
  };

  return (
    <div className="study-material-page">

      {/* Header */}
      <div className="study-material-header">
        <button
          className="back-btn"
          onClick={() => (window.location.href = "/")}
        >
          ← Back to Home
        </button>

        <div className="study-header-content">
          <span className="study-badge">INTERVIEW PREPARATION</span>

          <h1>
            Study Material <span>Stash</span>
          </h1>

          <p>
            Prepare smarter with carefully organized interview questions
            covering HR, Managerial, Technical and Aptitude rounds.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="study-material-container">

        <div className="category-grid">
          {categories.map((category) => (
            <div
              className={`category-card ${
                openCategory === category.id ? "active" : ""
              }`}
              key={category.id}
            >
              <div className="category-icon">{category.icon}</div>

              <h2>{category.title}</h2>

              <p>{category.description}</p>

              <div className="question-count">
                {category.questions.length} Questions
              </div>

              <button
                className="view-questions-btn"
                onClick={() => toggleCategory(category.id)}
              >
                {openCategory === category.id
                  ? "Hide Questions ↑"
                  : "View Questions →"}
              </button>

              {/* Questions */}
              {openCategory === category.id && (
                <div className="questions-list">
                  {category.questions.map((question, index) => (
                    <div className="question-item" key={index}>
                      <span>{index + 1}</span>
                      <p>{question}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="study-cta">
          <div>
            <h2>Ready to test your preparation?</h2>
            <p>
              Practice your skills with an AI-powered mock interview.
            </p>
          </div>

          <button
            onClick={() => (window.location.href = "/voice-interview")}
          >
            Start Mock Interview →
          </button>
        </div>

      </div>
    </div>
  );
}

export default StudyMaterial;