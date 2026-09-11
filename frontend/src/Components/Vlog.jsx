import React, { useState } from "react";
import "./Vlog.css";

function Vlog() {
  const [search, setSearch] = useState("");

  const blogs = [
    {
      category: "AI INTERVIEW",
      title: "10 Tips for Using AI Interview Assistants (2025 Guide)",
      description:
        "Explore our guide on 10 tips for using AI interview assistants (2025 guide) to master your next interview.",
      color: "blue",
    },
    {
      category: "INTERVIEW PREP",
      title: "How to Remember STAR Method Examples During Interviews",
      description:
        "Explore our guide on how to remember STAR method examples during interviews to master your next interview.",
      color: "purple",
    },
    {
      category: "REAL-TIME AI",
      title:
        "Conquer Your Next Interview: The Power of Real-Time Interview Help",
      description:
        "Explore our guide on conquer your next interview: the power of real-time interview help to master your next interview.",
      color: "pink",
    },
    {
      category: "BEHAVIORAL",
      title:
        'How to answer question: "describe a difficult work situation" with 7 Examples',
      description:
        'Explore our guide on how to answer your question: "describe a difficult work situation" with 7 examples to master your next interview.',
      color: "orange",
    },
    {
      category: "AI TOOLS",
      title: "How to Use AI Tools for Interview Practice Ethically",
      description:
        "Explore our guide on how to use AI tools for interview practice ethically to master your next interview.",
      color: "green",
    },
    {
      category: "CONFIDENCE",
      title: "How to Use AI During Interviews to Boost Your Confidence",
      description:
        "Explore our guide on how to use AI during interviews to boost your confidence to master your next interview.",
      color: "blue",
    },
    {
      category: "LAST MINUTE",
      title:
        "Need Interview Anxiety Help Tomorrow? Your Last-Minute Action Plan",
      description:
        "Explore our guide on need interview anxiety help tomorrow? your last-minute action plan to master your next interview.",
      color: "purple",
    },
  ];

  const filteredBlogs = blogs.filter((blog) =>
    `${blog.title} ${blog.description} ${blog.category}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleGetStarted = () => {
    window.open(
      "https://chromewebstore.google.com/detail/interviewiq/aeakfoeonjmfnhalemoeomdlmmdoejhi",
      "_blank"
    );
  };

  return (
    <section className="blogs-page">

      {/* Hero */}
      <div className="blogs-hero">

        <div className="blogs-badge">
          ✦ INTERVIEW IQ BLOG
        </div>

        <h1>
          Insights to Help You
          <span> Ace Your Interview</span>
        </h1>

        <p>
          Insights, tips, and tricks to help you navigate your
          career and technical interviews.
        </p>

        <div className="blogs-search">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search interview tips, AI, career advice..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

      </div>


      {/* Featured */}
      {!search && (
        <div className="featured-blog">

          <div className="featured-content">

            <div className="featured-badge">
              ⭐ FEATURED ARTICLE
            </div>

            <h2>
              Conquer Your Next Interview:
              <span> The Power of Real-Time Interview Help</span>
            </h2>

            <p>
              Discover how real-time AI assistance can help you stay
              prepared, confident, and focused during important interviews.
            </p>

            <button className="featured-button">
              Read Featured Article
              <span>→</span>
            </button>

          </div>

          <div className="featured-visual">

            <div className="visual-circle circle-one"></div>
            <div className="visual-circle circle-two"></div>

            <div className="visual-card">

              <div className="visual-icon">
                ✦
              </div>

              <strong>
                AI Interview Assistant
              </strong>

              <div className="visual-line"></div>
              <div className="visual-line short"></div>

              <div className="visual-answer">
                ✓ Answer Ready
              </div>

            </div>

          </div>

        </div>
      )}


      {/* Blog Header */}
      <div className="blogs-list-header">

        <div>

          <span>
            EXPLORE OUR ARTICLES
          </span>

          <h2>
            Latest Interview
            <span> Insights</span>
          </h2>

        </div>

        <div className="blog-count">
          {filteredBlogs.length} Articles
        </div>

      </div>


      {/* Blog Grid */}
      <div className="blogs-grid">

        {filteredBlogs.map((blog, index) => (

          <article
            className={`blog-card ${blog.color}`}
            key={index}
          >

            <div className="blog-card-top">

              <div className="blog-category">
                {blog.category}
              </div>

              <div className="blog-number">
                {String(index + 1).padStart(2, "0")}
              </div>

            </div>

            <div className="blog-icon">

              {index % 3 === 0
                ? "✦"
                : index % 3 === 1
                ? "◈"
                : "↗"}

            </div>

            <h3>
              {blog.title}
            </h3>

            <p>
              {blog.description}
            </p>

            <button className="read-more">
              Read More
              <span>→</span>
            </button>

          </article>

        ))}

      </div>


      {/* No Results */}
      {filteredBlogs.length === 0 && (

        <div className="no-blogs">

          <div>⌕</div>

          <h3>
            No articles found
          </h3>

          <p>
            Try searching with another keyword.
          </p>

        </div>

      )}


      {/* Bottom CTA */}
      <div className="blogs-bottom-cta">

        <div className="cta-sparkle">
          ✦
        </div>

        <h2>
          Prepare Smarter.
          <span> Interview Better.</span>
        </h2>

        <p>
          Turn your preparation into confidence with InterviewIQ.
        </p>

        <button onClick={handleGetStarted}>
          Get Started
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default Vlog;