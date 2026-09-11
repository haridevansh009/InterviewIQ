import React from "react";
import "./HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <h2>How it Works</h2>

      <div className="workflow">

        {/* Step 1 */}
        <div className="workflow-card primary">
          <div className="workflow-icon">▱</div>
          <span>Interviewer asks a question</span>
        </div>

        <div className="workflow-line"></div>

        {/* Step 2 */}
        <div className="workflow-card">
          <div className="workflow-icon blue">⚙</div>

          <div className="workflow-content">
            <h3>Is it an interview question?</h3>
            <p>
              Filters out small talk like "can you hear me?"
            </p>
          </div>
        </div>

        <div className="workflow-line"></div>

        {/* Step 3 */}
        <div className="workflow-card">
          <div className="workflow-icon blue">▤</div>

          <div className="workflow-content">
            <h3>Did you prep for this question?</h3>
          </div>
        </div>

        <div className="workflow-line"></div>

        {/* YES / NO */}
        <div className="workflow-branches">

          {/* YES */}
          <div className="workflow-branch yes-branch">

            <div className="branch-label yes-label">
              <span>✓</span>
              YES
            </div>

            <div className="branch-line"></div>

            <div className="answer-card saved-answer">

              <h3>Your Saved Answer</h3>

              <p>
                Shows your complete pre-written response
                instantly
              </p>

              <div className="answer-preview">
                <em>
                  "Tell me about a time you led a project..."
                </em>

                <strong>
                  → Your full STAR story appears
                </strong>
              </div>

            </div>

          </div>


          {/* NO */}
          <div className="workflow-branch no-branch">

            <div className="branch-label no-label">
              <span>×</span>
              NO
            </div>

            <div className="branch-line"></div>

            <div className="answer-card bullet-answer">

              <h3>AI Bullet Points</h3>

              <p>
                Generates 3-4 prompts from your resume
              </p>

              <div className="bullet-preview">

                <div>• &nbsp; Led team of 8 engineers</div>
                <div>• &nbsp; Shipped product 2 months early</div>
                <div>• &nbsp; Increased efficiency by 40%</div>

              </div>

            </div>

          </div>

        </div>


        {/* Bottom CTA */}
        <button
  className="how-it-works-signup"
  onClick={() => {
    window.open(
      "https://chromewebstore.google.com/detail/interviewiq/aeakfoeonjmfnhalemoeomdlmmdoejhi",
      "_blank"
    );
  }}
>
  Sign Up - Get a 70% discount
</button>

      </div>

    </section>
  );
}

export default HowItWorks;