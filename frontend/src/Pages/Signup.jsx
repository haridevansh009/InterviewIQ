import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
  };

  return (
    <div className="signup-page">

      {/* Background Effects */}
      <div className="signup-orb signup-orb-one"></div>
      <div className="signup-orb signup-orb-two"></div>

      <div className="signup-wrapper">

        {/* Left Section */}
        <div className="signup-info">

          <div className="signup-brand">
            <div className="signup-logo">🤖</div>

            <h1>
              Interview<span>IQ.AI</span>
            </h1>
          </div>

          <div className="signup-info-content">

            <span className="signup-badge">
              🚀 Start Your Interview Journey
            </span>

            <h2>
              Build confidence.
              <span> Ace your interview.</span>
            </h2>

            <p>
              Create your free Interview IQ account and get access
              to AI-powered interview preparation designed around
              your skills and career goals.
            </p>

            <div className="signup-benefits">

              <div className="signup-benefit">
                <div className="benefit-icon">🎯</div>
                <div>
                  <h3>Personalized Questions</h3>
                  <p>Practice questions tailored to your profile.</p>
                </div>
              </div>

              <div className="signup-benefit">
                <div className="benefit-icon">📈</div>
                <div>
                  <h3>Track Your Progress</h3>
                  <p>Monitor your performance and improvement.</p>
                </div>
              </div>

              <div className="signup-benefit">
                <div className="benefit-icon">🤖</div>
                <div>
                  <h3>AI-Powered Feedback</h3>
                  <p>Get intelligent feedback on your answers.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Signup Card */}
        <div className="signup-card">

          <div className="signup-card-header">
            <h2>Create Account ✨</h2>

            <p>
              Join Interview IQ and start preparing smarter.
            </p>
          </div>

          <form onSubmit={handleSignup}>

            {/* Name */}
            <div className="signup-input-group">
              <label>Full Name</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">👤</span>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="signup-input-group">
              <label>Email Address</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">✉</span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="signup-input-group">
              <label>Password</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="signup-input-group">
              <label>Confirm Password</label>

              <div className="signup-input-wrapper">
                <span className="signup-input-icon">🔐</span>

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="signup-password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="signup-terms">
              <input type="checkbox" required />
              <span>
                I agree to the Terms & Conditions and Privacy Policy.
              </span>
            </label>

            {/* Create Account */}
            <button type="submit" className="signup-button">
              <span>Create My Account</span>
              <span>→</span>
            </button>

          </form>

          <div className="signup-divider">
            <span>OR</span>
          </div>

          {/* Google */}
          <button
            className="signup-google"
            onClick={() => alert("Google signup coming soon.")}
          >
            <span className="signup-google-icon">G</span>
            Continue with Google
          </button>

          {/* Login */}
          <p className="already-account">
            Already have an account?

            <button
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              Login
            </button>
          </p>

          <p className="signup-security">
            🔐 Your information is securely protected
          </p>

        </div>

      </div>

      {/* Back Home */}
      <button
        className="signup-back-home"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        ← Back to Home
      </button>

    </div>
  );
}

export default Signup;