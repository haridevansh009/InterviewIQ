import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter your email and password.");
      return;
    }

    // Any email + any password accepted
    alert("Login successful!");

    // Open Study Material page
    window.location.href = "/study-material";
  };

  return (
    <div className="login-page">

      {/* Background Effects */}
      <div className="login-orb login-orb-one"></div>
      <div className="login-orb login-orb-two"></div>

      <div className="login-wrapper">

        {/* Left Section */}
        <div className="login-info">

          <div className="login-brand">
            <div className="login-logo">🤖</div>

            <h1>
              Interview<span>IQ.AI</span>
            </h1>
          </div>

          <div className="login-info-content">

            <span className="login-badge">
              ✨ AI-Powered Interview Preparation
            </span>

            <h2>
              Your next interview
              <span> starts here.</span>
            </h2>

            <p>
              Practice smarter, improve your skills, and build
              confidence with personalized AI-powered interview
              preparation.
            </p>

            <div className="login-features">

              <div className="login-feature">
                <div className="feature-icon">🎯</div>

                <div>
                  <h3>Personalized Practice</h3>
                  <p>
                    Questions based on your skills and experience.
                  </p>
                </div>
              </div>

              <div className="login-feature">
                <div className="feature-icon">📊</div>

                <div>
                  <h3>Smart Analytics</h3>
                  <p>
                    Track your performance and identify skill gaps.
                  </p>
                </div>
              </div>

              <div className="login-feature">
                <div className="feature-icon">🤖</div>

                <div>
                  <h3>AI Feedback</h3>
                  <p>
                    Get instant feedback to improve your answers.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Login Card */}
        <div className="login-card">

          <div className="login-card-header">
            <h2>Welcome Back 👋</h2>

            <p>
              Sign in to continue your interview preparation.
            </p>
          </div>

          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="input-group">
              <label>Email Address</label>

              <div className="input-wrapper">
                <span className="input-icon">✉</span>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password */}
            <div className="input-group">
              <label>Password</label>

              <div className="input-wrapper">
                <span className="input-icon">🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="login-options">

              <label className="remember-me">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={() =>
                  alert("Password reset option coming soon.")
                }
              >
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="login-button"
            >
              <span>Login to Interview IQ</span>
              <span>→</span>
            </button>

          </form>

          <div className="login-divider">
            <span>OR</span>
          </div>

          {/* Google */}
          <button
            className="google-login"
            onClick={() =>
              alert("Google login coming soon.")
            }
          >
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          {/* Signup */}
          <p className="signup-text">
            Don't have an account?

            <button
              onClick={() =>
                alert("Create Account page coming soon.")
              }
            >
              Create Account
            </button>
          </p>

          <p className="login-security">
            🔐 Your information is securely protected
          </p>

        </div>
      </div>

      {/* Back Home */}
      <button
        className="back-home"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        ← Back to Home
      </button>

    </div>
  );
}

export default Login;