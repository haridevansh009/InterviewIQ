import React, { useState } from "react";
import "./Recruiters.css";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Recruiters() {
  const [activeStep, setActiveStep] = useState(0);

  const handleGetStarted = () => {
    window.open(
      "https://chromewebstore.google.com/detail/interviewiq/aeakfoeonjmfnhalemoeomdlmmdoejhi",
      "_blank"
    );
  };

  const handleContact = () => {
    window.location.href = "mailto:hello@interviewiq.com";
  };

  const steps = [
    {
      number: "01",
      title: "Define the Role",
      text: "Set the skills, experience and qualities that matter for the role.",
    },
    {
      number: "02",
      title: "Have Better Conversations",
      text: "Candidates can focus on explaining their real experience clearly.",
    },
    {
      number: "03",
      title: "Evaluate What Matters",
      text: "Compare candidates using relevant skills and experience instead of memorized answers.",
    },
  ];

  return (
    <div className="recruiters-page">
      <Navbar />

      <section className="recruiters-hero">
        <div className="recruiters-hero-content">
          <span className="recruiters-label">
            FOR RECRUITERS & HIRING TEAMS
          </span>

          <h1>
            Fair Interviews.
            <br />
            <span>Better Hiring.</span>
          </h1>

          <p className="recruiters-hero-text">
            InterviewIQ helps hiring teams focus on what candidates actually
            know and have experienced — creating clearer conversations and
            more meaningful evaluations.
          </p>

          <div className="recruiters-hero-buttons">
            <button
              className="recruiters-primary-btn"
              onClick={handleGetStarted}
            >
              Get Started →
            </button>

            <button
              className="recruiters-secondary-btn"
              onClick={handleContact}
            >
              Talk to Our Team
            </button>
          </div>

          <div className="recruiters-trust">
            <div>
              <span>✓</span>
              Skill-focused
            </div>

            <div>
              <span>✓</span>
              Transparent
            </div>

            <div>
              <span>✓</span>
              Candidate-first
            </div>
          </div>
        </div>

        <div className="recruiters-dashboard-wrapper">
          <div className="recruiters-dashboard">
            <div className="dashboard-top">
              <div>
                <small>Candidate Evaluation</small>
                <h3>Interview Insights</h3>
              </div>

              <span className="dashboard-status">
                ● Live
              </span>
            </div>

            <div className="candidate-profile">
              <div className="candidate-avatar">JD</div>

              <div>
                <strong>Candidate Evaluation</strong>
                <p>Software Engineer</p>
              </div>

              <div className="match-score">
                <strong>92</strong>
                <span>Skill Match</span>
              </div>
            </div>

            <div className="dashboard-bars">
              <div className="dashboard-bar-item">
                <div>
                  <span>Technical Skills</span>
                  <strong>92%</strong>
                </div>

                <div className="bar">
                  <span style={{ width: "92%" }}></span>
                </div>
              </div>

              <div className="dashboard-bar-item">
                <div>
                  <span>Communication</span>
                  <strong>86%</strong>
                </div>

                <div className="bar">
                  <span style={{ width: "86%" }}></span>
                </div>
              </div>

              <div className="dashboard-bar-item">
                <div>
                  <span>Experience Relevance</span>
                  <strong>89%</strong>
                </div>

                <div className="bar">
                  <span style={{ width: "89%" }}></span>
                </div>
              </div>
            </div>

            <div className="dashboard-bottom">
              <span>✓ Skills verified</span>
              <span>✓ Experience relevant</span>
            </div>
          </div>

          <div className="floating-score-card">
            <span>Overall Match</span>
            <strong>92%</strong>
            <small>Strong candidate</small>
          </div>
        </div>
      </section>

      <section className="recruiters-intro">
        <span className="section-label">WHY INTERVIEW IQ</span>

        <h2>
          Interviews Should Measure
          <span> Skill, Not Memory.</span>
        </h2>

        <p>
          Great candidates can sometimes struggle to recall prepared
          information under interview pressure. InterviewIQ is designed to
          support authentic conversations while keeping the candidate's own
          knowledge and experience at the center.
        </p>
      </section>

      <section className="recruiter-feature-section">
        <div className="recruiter-feature-card">
          <div className="feature-icon blue">✓</div>
          <h3>Skills First</h3>
          <p>
            Focus evaluations on the skills and experience that actually
            matter for the role.
          </p>
        </div>

        <div className="recruiter-feature-card">
          <div className="feature-icon purple">✦</div>
          <h3>Authentic Conversations</h3>
          <p>
            Encourage candidates to communicate their own experience instead
            of relying on scripted answers.
          </p>
        </div>

        <div className="recruiter-feature-card">
          <div className="feature-icon green">↗</div>
          <h3>Fairer Evaluation</h3>
          <p>
            Create a more consistent interview experience for every candidate.
          </p>
        </div>
      </section>

      <section className="not-section">
        <div className="not-card">
          <span className="section-label">TRANSPARENCY MATTERS</span>

          <h2>What InterviewIQ Is Not</h2>

          <p className="not-intro">
            InterviewIQ isn't about replacing thinking with automation.
            It's about helping candidates recall what they've already
            prepared, clearly and confidently.
          </p>

          <div className="not-grid">
            <div className="not-item">
              <span>×</span>
              <div>
                <strong>Not a script tool</strong>
                <p>Candidates still speak in their own words.</p>
              </div>
            </div>

            <div className="not-item">
              <span>×</span>
              <div>
                <strong>Not an answer generator</strong>
                <p>It helps recall, not invent.</p>
              </div>
            </div>

            <div className="not-item">
              <span>×</span>
              <div>
                <strong>Not a way to fake experience</strong>
                <p>
                  Everything shown comes from the candidate's own preparation.
                </p>
              </div>
            </div>

            <div className="not-item">
              <span>×</span>
              <div>
                <strong>Not hidden or misleading</strong>
                <p>Recruiters can understand how the tool works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="support-section">
        <div className="support-heading">
          <span className="section-label">BUILT FOR BETTER HIRING</span>

          <h2>Why Recruiters Support It</h2>

          <p>
            Forward-thinking hiring teams can use InterviewIQ to create
            better conversations and more meaningful assessments for everyone.
          </p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <span>01</span>
            <h3>Skill-Based Evaluation</h3>
            <p>
              Put relevant technical and professional skills at the center of
              the interview.
            </p>
          </div>

          <div className="support-card">
            <span>02</span>
            <h3>Authentic Interviews</h3>
            <p>
              Let candidates explain their actual work, projects and
              experience in their own words.
            </p>
          </div>

          <div className="support-card">
            <span>03</span>
            <h3>Transparent Process</h3>
            <p>
              Build trust by making the interview process clear and
              understandable.
            </p>
          </div>
        </div>
      </section>

      <section className="fair-section">
        <div className="fair-content">
          <span className="section-label">
            A BETTER INTERVIEW EXPERIENCE
          </span>

          <h2>
            Fair Interviews.
            <br />
            <span>Real Candidates.</span>
            <br />
            Clear Minds.
          </h2>

          <p>
            At InterviewIQ, we believe great interviews should measure
            <strong> skill</strong>, not memory under stress.
          </p>
        </div>

        <div className="fair-quote">
          “We work with recruiters and companies who care about accessibility,
          fairness, and better conversations — not scripted answers.”
        </div>
      </section>

      <section className="recruiter-how-section">
        <div className="how-heading">
          <span className="section-label">SIMPLE PROCESS</span>

          <h2>How It Works</h2>

          <p>
            A simple approach that keeps the interview focused on the
            candidate and the role.
          </p>
        </div>

        <div className="recruiter-steps">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`recruiter-step ${
                activeStep === index ? "active-step" : ""
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-number">{step.number}</div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>

              <span className="step-arrow">→</span>
            </div>
          ))}
        </div>
      </section>

      <section className="recruiter-final-cta">
        <div>
          <span className="section-label">READY TO IMPROVE HIRING?</span>

          <h2>
            Build a Hiring Process
            <br />
            Candidates Can Trust.
          </h2>

          <p>
            Make interviews clearer, more authentic and focused on what
            actually matters.
          </p>

          <button
            className="recruiters-primary-btn"
            onClick={handleGetStarted}
          >
            Get Started →
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Recruiters;