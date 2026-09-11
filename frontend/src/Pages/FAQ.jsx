import React, { useMemo, useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    category: "General",
    question: "What is Interview IQ?",
    answer:
      "Interview IQ is an AI-powered interview preparation platform that helps students and job seekers prepare for technical, HR, and behavioral interviews with personalized questions, AI feedback, and interview insights.",
  },
  {
    category: "General",
    question: "Who can use Interview IQ?",
    answer:
      "Interview IQ is designed for students, freshers, job seekers, and anyone who wants to improve their interview preparation and confidence.",
  },
  {
    category: "AI Interview",
    question: "How does the AI interview work?",
    answer:
      "The AI generates questions based on your selected role, skills, difficulty level, and interview type. You answer the questions and receive useful feedback to improve your responses.",
  },
  {
    category: "AI Interview",
    question: "Can Interview IQ generate questions from my resume?",
    answer:
      "Yes. You can upload your resume and use the extracted skills and experience to generate more personalized interview questions.",
  },
  {
    category: "AI Interview",
    question: "What types of interviews are supported?",
    answer:
      "You can prepare for technical, HR, behavioral, and role-specific interviews. Different difficulty levels can also be selected.",
  },
  {
    category: "Feedback",
    question: "Will I get feedback on my answers?",
    answer:
      "Yes. Interview IQ can analyze your responses and provide feedback on areas such as relevance, clarity, structure, and areas where you can improve.",
  },
  {
    category: "Feedback",
    question: "Can I track my interview performance?",
    answer:
      "Yes. Your interview history and performance information can be used to identify your strengths and areas that need more preparation.",
  },
  {
    category: "ATS",
    question: "What is the ATS Analyzer?",
    answer:
      "The ATS Analyzer helps you evaluate your resume against job requirements and identify skills, keywords, and areas that could be improved for better resume compatibility.",
  },
  {
    category: "Account",
    question: "Do I need an account to use Interview IQ?",
    answer:
      "Some basic features may be available without an account, while account-based features can provide personalized interview preparation and history.",
  },
  {
    category: "Account",
    question: "Is my interview history saved?",
    answer:
      "When you use account-based features, your interview information can be stored so you can review your previous preparation and progress.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(faqData.map((item) => item.category)),
  ];

  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const searchText = search.toLowerCase();

      const matchesSearch =
        item.question.toLowerCase().includes(searchText) ||
        item.answer.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      {/* Hero */}
      <section className="faq-hero">
        <div className="faq-hero-content">
          <span className="faq-badge">INTERVIEW IQ SUPPORT</span>

          <h1>
            Frequently Asked <span>Questions</span>
          </h1>

          <p>
            Everything you need to know about Interview IQ, AI interviews,
            resume analysis and your interview preparation journey.
          </p>

          <div className="faq-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search your question..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpenIndex(null);
              }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-container">
          {/* Categories */}
          <div className="faq-categories">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "category active" : "category"
                }
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="faq-list">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((item, index) => (
                <div
                  className={`faq-item ${
                    openIndex === index ? "faq-open" : ""
                  }`}
                  key={item.question}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="question-left">
                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{item.question}</span>
                    </div>

                    <span className="faq-icon">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>

                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: openIndex === index ? "300px" : "0px",
                    }}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <div className="no-results-icon">?</div>
                <h3>No questions found</h3>
                <p>
                  Try searching with a different keyword or select another
                  category.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="faq-cta">
        <div>
          <span>READY TO PREPARE?</span>
          <h2>Turn your preparation into confidence.</h2>
          <p>
            Start practicing smarter with Interview IQ.
          </p>
        </div>

        <button onClick={() => (window.location.href = "/")}>
          Start Preparing →
        </button>
      </section>
    </div>
  );
}

export default FAQ;