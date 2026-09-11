import React from "react";
import "./Navbar.css";

function Navbar() {
  const handleSignup = () => {
    window.open(
      "https://chromewebstore.google.com/detail/interviewiq/aeakfoeonjmfnhalemoeomdlmmdoejhi",
      "_blank"
    );
  };

  const handleBlogs = () => {
    window.location.href = "/blogs";
  };

  const handleTools = () => {
    window.location.href = "/tools";
  };

  const handleRecruiters = () => {
    window.location.href = "/recruiters";
  };

  const handleFAQ = () => {
    window.location.href = "/faq";
  };

  const handleDashboard = () => {
    window.location.href = "/dashboard";
  };

  return (
    <nav className="iq-navbar">

      {/* Logo */}
      <div className="iq-navbar-logo">
        Interview<span>IQ</span>
      </div>

      {/* Navigation */}
      <div className="iq-navbar-links">

        <button>How it Works</button>

        <button>Features</button>

        <button>Pricing</button>

        <button onClick={handleFAQ}>
          FAQ
        </button>

        <button onClick={handleRecruiters}>
          For Recruiters
        </button>

        <button onClick={handleTools}>
          Tools
        </button>

        <button>How to Use</button>

        <button onClick={handleBlogs}>
          Blogs
        </button>

        <button>Alternatives</button>

        {/* Dashboard */}
        <button onClick={handleDashboard}>
          Dashboard
        </button>

      </div>

      {/* Sign Up */}
      <button
        className="iq-signup-btn"
        onClick={handleSignup}
      >
        Sign Up
      </button>

    </nav>
  );
}

export default Navbar;