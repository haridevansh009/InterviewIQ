import React, { useEffect, useMemo, useState } from "react";
import "./Dashboard.css";
import { getDashboardData } from "../API/api";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Temporary candidate ID for testing
  // Later this will come from logged-in candidate
  const candidateId = "candidate001";

  // =========================================
  // FETCH DASHBOARD DATA
  // =========================================

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getDashboardData(candidateId);

      setDashboardData(data);
      setInterviews(data.interviews || []);
    } catch (err) {
      console.error("Dashboard Error:", err);

      setError(
        err.message || "Unable to load dashboard data."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================================
  // LOAD DATA
  // =========================================

  useEffect(() => {
    fetchDashboardData();
  }, []);

  // =========================================
  // STATISTICS
  // =========================================

  const statistics = useMemo(() => {
    if (!interviews.length) {
      return {
        totalInterviews: 0,
        averageScore: 0,
        bestScore: 0,
        latestScore: 0,
      };
    }

    const scores = interviews
      .map((interview) => Number(interview.overallScore))
      .filter((score) => !Number.isNaN(score));

    if (!scores.length) {
      return {
        totalInterviews: interviews.length,
        averageScore: 0,
        bestScore: 0,
        latestScore: 0,
      };
    }

    const totalScore = scores.reduce(
      (sum, score) => sum + score,
      0
    );

    return {
      totalInterviews: interviews.length,
      averageScore: Math.round(
        totalScore / scores.length
      ),
      bestScore: Math.max(...scores),
      latestScore: scores[0],
    };
  }, [interviews]);

  // =========================================
  // SKILL PERFORMANCE
  // =========================================

  const skillPerformance = useMemo(() => {
    if (!interviews.length) {
      return {
        technical: 0,
        communication: 0,
        problemSolving: 0,
        confidence: 0,
      };
    }

    const calculateAverage = (field) => {
      const values = interviews
        .map((interview) => Number(interview[field]))
        .filter((value) => !Number.isNaN(value));

      if (!values.length) {
        return 0;
      }

      const total = values.reduce(
        (sum, value) => sum + value,
        0
      );

      return Math.round(total / values.length);
    };

    return {
      technical: calculateAverage("technicalScore"),
      communication: calculateAverage(
        "communicationScore"
      ),
      problemSolving: calculateAverage(
        "problemSolvingScore"
      ),
      confidence: calculateAverage(
        "confidenceScore"
      ),
    };
  }, [interviews]);

  // =========================================
  // FORMAT DATE
  // =========================================

  const formatDate = (date) => {
    if (!date) {
      return "Date unavailable";
    }

    const formattedDate = new Date(date);

    if (Number.isNaN(formattedDate.getTime())) {
      return "Date unavailable";
    }

    return formattedDate.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // =========================================
  // CANDIDATE NAME
  // =========================================

  const candidateName =
    dashboardData?.candidate?.name ||
    dashboardData?.user?.name ||
    "Candidate";

  // =========================================
  // LOADING
  // =========================================

  if (loading) {
    return (
      <div className="dashboard-page">
        <div className="dashboard-loading">
          <div className="loader"></div>

          <p>
            Loading your performance...
          </p>
        </div>
      </div>
    );
  }

  // =========================================
  // DASHBOARD
  // =========================================

  return (
    <div className="dashboard-page">

      {/* HEADER */}

      <div className="dashboard-header">
        <div>
          <p className="dashboard-label">
            CANDIDATE DASHBOARD
          </p>

          <h1>
            Welcome back,{" "}
            <span>{candidateName}</span> 👋
          </h1>

          <p className="dashboard-subtitle">
            Track your interview performance and
            improve your skills.
          </p>
        </div>

        <button
          className="refresh-btn"
          onClick={fetchDashboardData}
        >
          ↻ Refresh
        </button>
      </div>


      {/* ERROR */}

      {error && (
        <div className="dashboard-error">
          <strong>
            Unable to load live data.
          </strong>

          <p>{error}</p>

          <button onClick={fetchDashboardData}>
            Try Again
          </button>
        </div>
      )}


      {/* STATISTICS */}

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon">
            🎯
          </div>

          <div>
            <p>Total Interviews</p>

            <h2>
              {statistics.totalInterviews}
            </h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon">
            📊
          </div>

          <div>
            <p>Average Score</p>

            <h2>
              {statistics.averageScore}%
            </h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon">
            🏆
          </div>

          <div>
            <p>Best Score</p>

            <h2>
              {statistics.bestScore}%
            </h2>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-icon">
            ⚡
          </div>

          <div>
            <p>Latest Score</p>

            <h2>
              {statistics.latestScore}%
            </h2>
          </div>
        </div>

      </div>


      {/* MAIN CONTENT */}

      <div className="dashboard-content">

        {/* PERFORMANCE */}

        <section className="dashboard-card performance-card">

          <div className="card-heading">
            <div>
              <h2>
                Performance Overview
              </h2>

              <p>
                Your interview performance over time
              </p>
            </div>
          </div>


          {interviews.length === 0 ? (

            <div className="empty-state">
              <div className="empty-icon">
                📈
              </div>

              <h3>
                No interview data yet
              </h3>

              <p>
                Complete your first interview to see
                your performance here.
              </p>
            </div>

          ) : (

            <div className="performance-chart">

              {interviews
                .slice(0, 8)
                .reverse()
                .map((interview, index) => {

                  const score = Number(
                    interview.overallScore || 0
                  );

                  return (
                    <div
                      className="chart-column"
                      key={
                        interview._id || index
                      }
                    >

                      <span className="chart-score">
                        {score}%
                      </span>

                      <div className="chart-bar-wrapper">

                        <div
                          className="chart-bar"
                          style={{
                            height: `${Math.min(
                              Math.max(score, 5),
                              100
                            )}%`,
                          }}
                        />

                      </div>

                      <span className="chart-label">
                        #{index + 1}
                      </span>

                    </div>
                  );
                })}

            </div>

          )}

        </section>


        {/* SKILL PERFORMANCE */}

        <section className="dashboard-card">

          <div className="card-heading">
            <div>
              <h2>
                Skill Performance
              </h2>

              <p>
                Based on your completed interviews
              </p>
            </div>
          </div>


          <div className="skills-list">

            <SkillBar
              title="Technical Knowledge"
              score={skillPerformance.technical}
            />

            <SkillBar
              title="Communication"
              score={
                skillPerformance.communication
              }
            />

            <SkillBar
              title="Problem Solving"
              score={
                skillPerformance.problemSolving
              }
            />

            <SkillBar
              title="Confidence"
              score={
                skillPerformance.confidence
              }
            />

          </div>

        </section>

      </div>


      {/* RECENT INTERVIEWS */}

      <section className="dashboard-card recent-section">

        <div className="card-heading">
          <div>
            <h2>
              Recent Interviews
            </h2>

            <p>
              Your latest interview reports
            </p>
          </div>
        </div>


        {interviews.length === 0 ? (

          <div className="empty-state small">

            <h3>
              No interviews completed
            </h3>

            <p>
              Your interview reports will appear
              here after completing an interview.
            </p>

          </div>

        ) : (

          <div className="interview-list">

            {interviews
              .slice(0, 5)
              .map((interview) => {

                const score = Number(
                  interview.overallScore || 0
                );

                return (
                  <div
                    className="interview-row"
                    key={interview._id}
                  >

                    <div className="interview-info">

                      <div className="interview-icon">
                        💼
                      </div>

                      <div>

                        <h3>
                          {interview.role ||
                            interview.jobRole ||
                            "Interview"}
                        </h3>

                        <p>
                          {formatDate(
                            interview.createdAt
                          )}
                        </p>

                      </div>

                    </div>


                    <div className="interview-score">

                      <span
                        className={
                          score >= 80
                            ? "score excellent"
                            : score >= 60
                            ? "score average"
                            : "score low"
                        }
                      >
                        {score}%
                      </span>


                      <button
                        className="report-btn"
                        onClick={() => {
                          window.location.href =
                            `/interview-report/${interview._id}`;
                        }}
                      >
                        View Report →
                      </button>

                    </div>

                  </div>
                );
              })}

          </div>

        )}

      </section>

    </div>
  );
};


// =========================================
// SKILL BAR
// =========================================

const SkillBar = ({ title, score }) => {

  const safeScore = Math.min(
    Math.max(Number(score) || 0, 0),
    100
  );

  return (
    <div className="skill-item">

      <div className="skill-top">

        <span>
          {title}
        </span>

        <strong>
          {safeScore}%
        </strong>

      </div>

      <div className="skill-track">

        <div
          className="skill-progress"
          style={{
            width: `${safeScore}%`,
          }}
        />

      </div>

    </div>
  );
};


export default Dashboard;