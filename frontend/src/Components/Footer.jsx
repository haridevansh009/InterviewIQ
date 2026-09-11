import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <button
            className="footer-logo"
            onClick={() => scrollToSection("home")}
          >
            <span className="footer-logo-icon">🤖</span>

            <span>
              Interview<span>IQ.AI</span>
            </span>
          </button>

          <p>
            AI-powered interview preparation designed to help you
            practice smarter, improve your skills, and perform better.
          </p>
        </div>

        {/* Platform */}
        <div className="footer-column">
          <h3>Platform</h3>

          <button onClick={() => scrollToSection("features")}>
            Features
          </button>

          <button onClick={() => scrollToSection("how-it-works")}>
            How It Works
          </button>

          <button>
            AI Interview
          </button>

          <button>
            Analytics
          </button>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          {/* About Page */}
          <button onClick={() => (window.location.href = "/about")}>
            About
          </button>

          <button>
            Contact
          </button>

          <button>
            Privacy Policy
          </button>
        </div>

        {/* Get Started */}
        <div className="footer-column">
          <h3>Get Started</h3>

          <button onClick={() => (window.location.href = "/login")}>
            Login
          </button>

          <button onClick={() => (window.location.href = "/signup")}>
            Create Account
          </button>

          <button
            onClick={() => (window.location.href = "/voice-interview")}
          >
            Start Interview
          </button>

          <button>
            View History
          </button>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © 2026 Interview IQ. All rights reserved.
        </p>

        <div className="footer-socials">

          <button
            aria-label="LinkedIn"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/devansh-bhardwaj-2513672a7/",
                "_blank"
              )
            }
          >
            in
          </button>

          <button aria-label="GitHub">GH</button>
          <button aria-label="Email">@</button>

        </div>

        <p className="footer-tagline">
          AI-Powered Interview Preparation
        </p>

      </div>

    </footer>
  );
}

export default Footer;