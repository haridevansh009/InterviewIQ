import React from "react";
import "./InterviewComplete.css";

function InterviewComplete() {
  return (
    <div className="interview-complete-page">

      <div className="complete-card">

        <div className="complete-icon">
          ✓
        </div>

        <span className="complete-badge">
          🎉 INTERVIEW COMPLETED
        </span>

        <h1>
          Interview Successfully Completed!
        </h1>

        <p>
          Great job! You have successfully completed your
          AI Mock Interview.
        </p>

        <p className="complete-subtext">
          Your interview responses have been recorded.
          You can now review your performance and work on
          improving your skills.
        </p>

        <div className="complete-actions">

          <button
            className="complete-home-button"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            ← Back to Home
          </button>

          <button
            className="complete-interview-button"
            onClick={() => {
              window.location.href = "/voice-interview";
            }}
          >
            Start New Interview →
          </button>

        </div>

      </div>

    </div>
  );
}

export default InterviewComplete;