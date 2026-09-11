import React, { useState } from "react";
import "./ATSAnalyzer.css";

function ATSAnalyzer() {
  const [file, setFile] = useState(null);
  const [analyzed, setAnalyzed] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (selectedFile) => {
    if (!selectedFile) return;

    const validTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "application/msword",
    ];

    if (validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
      setAnalyzed(false);
    } else {
      alert("Please upload a PDF or DOCX resume.");
    }
  };

  const handleChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    handleFile(e.dataTransfer.files[0]);
  };

  const handleAnalyze = () => {
    if (!file) {
      alert("Please upload your resume first.");
      return;
    }

    setAnalyzed(true);
  };

  return (
    <div className="ats-page">
      <header className="ats-header">
        <div className="ats-logo">
          <span>✦</span> Interview IQ
        </div>

        <button
          className="ats-back-btn"
          onClick={() => {
            window.location.href = "/tools";
          }}
        >
          ← Back to Tools
        </button>
      </header>

      <main className="ats-container">
        {!analyzed ? (
          <>
            <div className="ats-hero">
              <div className="ats-badge">AI-Powered Resume Analysis</div>

              <h1>
                Check Your Resume's
                <span> ATS Score</span>
              </h1>

              <p>
                Upload your resume and discover how well it performs against
                modern Applicant Tracking Systems.
              </p>
            </div>

            <div
              className={`ats-upload-card ${
                dragActive ? "drag-active" : ""
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
            >
              <div className="upload-icon">📄</div>

              <h2>Upload Your Resume</h2>

              <p>
                Drag & drop your resume here or choose a file from your
                computer
              </p>

              <label className="choose-file-btn">
                Choose Resume
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  hidden
                />
              </label>

              <span className="upload-format">
                Supported formats: PDF, DOC, DOCX • Max size: 5MB
              </span>

              {file && (
                <div className="selected-file">
                  <span>📎</span>
                  <div>
                    <strong>{file.name}</strong>
                    <small>
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </small>
                  </div>

                  <button
                    onClick={() => {
                      setFile(null);
                      setAnalyzed(false);
                    }}
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            <button
              className="analyze-btn"
              onClick={handleAnalyze}
              disabled={!file}
            >
              Analyze My Resume
              <span>→</span>
            </button>

            <div className="ats-benefits">
              <div>
                <span>✓</span>
                Keyword Analysis
              </div>

              <div>
                <span>✓</span>
                ATS Compatibility
              </div>

              <div>
                <span>✓</span>
                Resume Suggestions
              </div>
            </div>
          </>
        ) : (
          <div className="ats-results">
            <div className="result-header">
              <div>
                <div className="ats-badge">Analysis Complete</div>
                <h1>Your Resume ATS Report</h1>
                <p>{file.name}</p>
              </div>

              <button
                className="analyze-again"
                onClick={() => {
                  setFile(null);
                  setAnalyzed(false);
                }}
              >
                Analyze Another Resume
              </button>
            </div>

            <div className="score-section">
              <div className="score-circle">
                <div>
                  <strong>87</strong>
                  <span>/100</span>
                </div>
              </div>

              <div className="score-info">
                <h2>Excellent ATS Score!</h2>
                <p>
                  Your resume has a strong ATS compatibility score. A few
                  improvements can make it even stronger.
                </p>
              </div>
            </div>

            <div className="analysis-grid">
              <div className="analysis-card">
                <span>🔑</span>
                <h3>Keywords</h3>
                <strong>90%</strong>
                <p>Strong keyword coverage</p>
              </div>

              <div className="analysis-card">
                <span>🛠️</span>
                <h3>Skills</h3>
                <strong>85%</strong>
                <p>Good technical skill match</p>
              </div>

              <div className="analysis-card">
                <span>📄</span>
                <h3>Formatting</h3>
                <strong>92%</strong>
                <p>ATS-friendly structure</p>
              </div>

              <div className="analysis-card">
                <span>💼</span>
                <h3>Experience</h3>
                <strong>78%</strong>
                <p>Could be more impactful</p>
              </div>
            </div>

            <div className="recommendation-section">
              <div className="recommendation-card">
                <h2>⚡ Recommended Improvements</h2>

                <div className="recommendation">
                  <span>✓</span>
                  <p>Add more job-specific keywords.</p>
                </div>

                <div className="recommendation">
                  <span>✓</span>
                  <p>Use measurable achievements in your experience section.</p>
                </div>

                <div className="recommendation">
                  <span>✓</span>
                  <p>Keep section headings clear and ATS-readable.</p>
                </div>
              </div>

              <div className="missing-card">
                <h2>🔍 Suggested Keywords</h2>

                <div className="keyword-list">
                  <span>REST API</span>
                  <span>Git</span>
                  <span>Cloud</span>
                  <span>Testing</span>
                  <span>Agile</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default ATSAnalyzer;