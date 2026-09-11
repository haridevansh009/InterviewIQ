import React from "react";
import "./Hero.css";

function Hero() {
  const goToSignup = () => {
    window.location.href = "/signup";
  };

  const goToInterview = () => {
    window.location.href = "/interview";
  };

  const goToStudyMaterial = () => {
    window.location.href = "/study-material";
  };

  return (
    <>
      {/* ================= OFFER BAR ================= */}
      <div className="iq-offer-bar">
        <div className="iq-offer-content">
          <span className="iq-offer-fire">🔥</span>

          <span>
            Special Offer for You: <strong>70% OFF</strong> - Get your first
            month for just <strong>$1.5!</strong>
          </span>

          <button
            className="iq-offer-btn"
            onClick={goToSignup}
          >
            Get Started →
          </button>
        </div>
      </div>

      {/* ================= HERO ================= */}
      <section className="iq-hero">

        {/* LEFT SIDE */}
        <div className="iq-hero-left">

          <h1>
            Your Interview
            <br />
            Preparation Partner,
            <br />
            <span>Powered by AI</span>
          </h1>

          <p>
            Practice real interview questions, get instant AI feedback,
            track your progress and build confidence – all in one place.
          </p>

          <button
            className="iq-main-btn"
            onClick={goToInterview}
          >
            <span>Start Your Interview Now&nbsp; →</span>
            <small>Get 70% OFF today</small>
          </button>

          {/* STUDY MATERIAL */}
          <button
            className="study-material-btn"
            onClick={goToStudyMaterial}
          >
            Study Material
          </button>

          {/* FEATURES */}
          <div className="iq-benefits">

            <div className="iq-benefit">
              <div className="iq-benefit-icon purple-icon">
                ⚡
              </div>

              <div>
                <strong>AI-Powered</strong>
                <span>Questions</span>
              </div>
            </div>

            <div className="iq-benefit-divider"></div>

            <div className="iq-benefit">
              <div className="iq-benefit-icon blue-icon">
                📊
              </div>

              <div>
                <strong>Personalized</strong>
                <span>Feedback</span>
              </div>
            </div>

            <div className="iq-benefit-divider"></div>

            <div className="iq-benefit">
              <div className="iq-benefit-icon pink-icon">
                🛡
              </div>

              <div>
                <strong>Real Interview</strong>
                <span>Practice</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="iq-hero-right">

          {/* Decorative elements */}
          <div className="iq-circle"></div>

          <div className="iq-dots">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="iq-orange-shape"></div>

          {/* APP MOCKUP */}
          <div className="iq-interview-card">

            {/* TOP HEADER */}
            <div className="iq-card-top">

              <div className="iq-window-dots">
                <span className="red"></span>
                <span className="yellow"></span>
                <span className="green"></span>
              </div>

              <span className="iq-practice-title">
                Interview Practice
              </span>

              <div className="iq-live">
                <span></span>
                Live
              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="iq-card-body">

              {/* QUESTION */}
              <div className="iq-question-section">

                <div className="iq-ai-title">
                  <div className="iq-ai-icon">🤖</div>

                  <span>AI Interviewer</span>
                </div>

                <div className="iq-question-box">
                  <h3>
                    Tell me about yourself and
                    <br />
                    your technical experience.
                  </h3>

                  <div className="iq-placeholder-line"></div>
                  <div className="iq-placeholder-line short"></div>
                </div>

              </div>

              {/* USER VIDEO */}
              <div className="iq-user-video">

                <div className="iq-user-circle">
                  <div className="iq-user-head"></div>
                  <div className="iq-user-body"></div>
                </div>

                <strong>You</strong>

              </div>

            </div>

            {/* CALL BUTTONS */}
            <div className="iq-call-controls">

              <button className="iq-control mic">
                🎙
              </button>

              <button className="iq-control camera">
                ▪
              </button>

              <button className="iq-control end">
                ☎
              </button>

            </div>

            {/* FEEDBACK */}
            <div className="iq-feedback">

              <div className="iq-feedback-left">

                <div className="iq-feedback-icon">
                  ★
                </div>

                <div>
                  <span>AI Feedback</span>

                  <strong>Good Answer!</strong>

                  <small>
                    Your answer shows clarity and confidence.
                  </small>
                </div>

              </div>

              <div className="iq-score">

                <span>Score</span>

                <div className="iq-score-circle">
                  92%
                </div>

              </div>

            </div>

            {/* CARD FOOTER */}
            <div className="iq-card-footer">

              <div className="iq-progress-area">

                <span>Question 1 of 5</span>

                <div className="iq-progress">
                  <div></div>
                </div>

              </div>

              <button
                className="iq-next-btn"
                onClick={goToInterview}
              >
                Next Question →
              </button>

            </div>

          </div>

          {/* SIDE TEXT */}
          <div className="iq-side-note">
            <strong>Practice</strong>
            <strong>Improve</strong>
            <strong>Succeed</strong>

            <div className="iq-arrow">
              ↙
            </div>
          </div>

        </div>

      </section>

      {/* ================= TRUST SECTION ================= */}
      <section className="iq-trusted">

        <p>
          TRUSTED BY STUDENTS AND PROFESSIONALS AT
        </p>

        <div className="iq-company-list">

          <span className="google">Google</span>

          <span className="company-divider"></span>

          <span className="microsoft">
            <i></i>
            Microsoft
          </span>

          <span className="company-divider"></span>

          <span className="amazon">
            amazon
          </span>

          <span className="company-divider"></span>

          <span className="meta">
            ∞ Meta
          </span>

          <span className="company-divider"></span>

          <span className="linkedin">
            LinkedIn
          </span>

        </div>

      </section>
    </>
  );
}

export default Hero;