import React from "react";
import "./PricingCTA.css";

function PricingCTA() {
  const handleGetStarted = () => {
    window.open(
      "https://chromewebstore.google.com/detail/interviewiq/aeakfoeonjmfnhalemoeomdlmmdoejhi",
      "_blank"
    );
  };

  return (
    <section className="pricing-cta-section">
      <div className="pricing-cta-glow glow-one"></div>
      <div className="pricing-cta-glow glow-two"></div>

      <div className="pricing-cta-container">

        <div className="pricing-cta-badge">
          ✦ INTERVIEWIQ
        </div>

        <h2>
          Ready to Ace Your
          <span>Next Interview?</span>
        </h2>

        <p className="pricing-cta-subtitle">
          Stop memorizing. Start preparing smarter with AI-powered
          interview assistance built for real interview situations.
        </p>

        <div className="pricing-benefits">

          <div className="pricing-benefit-card">
            <div className="pricing-benefit-icon blue-icon">
              ✦
            </div>

            <div>
              <h3>AI-Powered Preparation</h3>
              <p>
                Get personalized questions and smart answer guidance.
              </p>
            </div>
          </div>

          <div className="pricing-benefit-card">
            <div className="pricing-benefit-icon purple-icon">
              ◈
            </div>

            <div>
              <h3>Real-Time Assistance</h3>
              <p>
                Stay confident with instant help when you need it.
              </p>
            </div>
          </div>

          <div className="pricing-benefit-card">
            <div className="pricing-benefit-icon orange-icon">
              ↗
            </div>

            <div>
              <h3>Prepare With Confidence</h3>
              <p>
                Keep your important answers and achievements ready.
              </p>
            </div>
          </div>

        </div>

        <button
          className="pricing-get-started"
          onClick={handleGetStarted}
        >
          Get Started
          <span>→</span>
        </button>

        <div className="pricing-cta-note">
          ⚡ Start preparing smarter with InterviewIQ
        </div>

      </div>
    </section>
  );
}

export default PricingCTA;