import React, { useState } from "react";
import "./Tools.css";

function Tools() {
  const [activeCategory, setActiveCategory] = useState("All Tools");

  const chromeLink =
    "https://chromewebstore.google.com/detail/interviewiq/aeakfoeonjmfnhalemoeomdlmmdoejhi";

  const tools = [
    {
      icon: "💰",
      title: "Freelance Price Calculator",
      category: "Freelancing",
      description:
        "Calculate fair global rates for your freelance services. Get data-driven pricing recommendations, negotiation strategies, and the confidence to present your worth in client interviews.",
      features: [
        "Global freelance rate recommendations",
        "Data-driven pricing guidance",
        "Negotiation strategies",
        "Client interview preparation",
      ],
    },
    {
      icon: "🔍",
      title: "Job Description Keyword Finder",
      category: "Resume & ATS",
      description:
        "Extract keywords from job descriptions instantly, then optimize your resume with those exact keywords. See what you're missing and beat ATS systems.",
      features: [
        "AI-powered keyword extraction",
        "Resume keyword matching",
        "Missing keyword identification",
        "ATS optimization",
      ],
    },
    {
      icon: "🏢",
      title: "Company Research Tool",
      category: "Interview Prep",
      description:
        "Get interview-ready insights about any company in seconds. Learn how to research recent news, CEO background, strategic context, and job-specific information to ace your job interviews.",
      features: [
        "Recent company news & developments",
        "CEO background & activities",
        "Strategic context & industry position",
        "Interview talking points",
      ],
    },
    {
      icon: "💬",
      title: "Tell Me About Yourself Generator",
      category: "Interview Prep",
      description:
        "Create a personalized, job-ready response for the most common interview question. Tailored for freshers, experienced professionals, and career switchers.",
      features: [
        "Personalized answer generation",
        "Multiple experience levels",
        "Industry-specific templates",
        "Concise 1-2 minute format",
      ],
    },
  ];

  const categories = [
    "All Tools",
    "Freelancing",
    "Resume & ATS",
    "Interview Prep",
  ];

  const filteredTools =
    activeCategory === "All Tools"
      ? tools
      : tools.filter((tool) => tool.category === activeCategory);

  // Use This Tool button
  const handleUseTool = (tool) => {
    // Resume & ATS tool opens the ATS Analyzer page
    if (tool.category === "Resume & ATS") {
      window.location.href = "/ats-analyzer";
      return;
    }

    // All other tools keep the existing Chrome Web Store behavior
    window.open(chromeLink, "_blank");
  };

  // Bottom CTA
  const handleGetStarted = () => {
    window.open(chromeLink, "_blank");
  };

  return (
    <section className="tools-page">
      {/* Hero Section */}
      <div className="tools-hero">
        <div className="tools-badge">
          ✦ INTERVIEW IQ TOOLS
        </div>

        <h1>
          Free Interview & Career Tools
        </h1>

        <p>
          Access our collection of free tools designed to help you
          succeed in your career.
          <br />
          From resume optimization to interview preparation, we've got you covered.
        </p>

        {/* Categories */}
        <div className="tools-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category
                  ? "tool-category active"
                  : "tool-category"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="tools-grid">
        {filteredTools.map((tool, index) => (
          <div
            className={`tool-card tool-card-${index + 1}`}
            key={tool.title}
          >
            {/* Card Header */}
            <div className="tool-card-header">
              <div className="tool-icon">
                {tool.icon}
              </div>

              <div className="tool-card-title">
                <h2>
                  {tool.title}
                </h2>

                <span className="tool-category-tag">
                  {tool.category}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="tool-description">
              {tool.description}
            </p>

            {/* Features */}
            <div className="tool-features">
              <h3>
                Key Features:
              </h3>

              <ul>
                {tool.features.map((feature) => (
                  <li key={feature}>
                    <span>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CLICKABLE USE THIS TOOL BUTTON */}
            <button
              className="use-tool-btn"
              onClick={() => handleUseTool(tool)}
            >
              Use This Tool
            </button>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="tools-bottom-cta">
        <div className="tools-cta-icon">
          ✦
        </div>

        <h2>
          Everything You Need to
          <span> Ace Your Interview</span>
        </h2>

        <p>
          Prepare smarter with InterviewIQ's AI-powered interview
          assistance and career tools.
        </p>

        <button
          onClick={handleGetStarted}
          className="tools-cta-button"
        >
          Get Started
          <span>→</span>
        </button>
      </div>
    </section>
  );
}

export default Tools;