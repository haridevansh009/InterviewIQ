const Interview = require("../models/Interview");

// Create interview report
const createInterview = async (req, res) => {
  try {
    const {
      candidateId,
      role,
      overallScore,
      technicalScore,
      communicationScore,
      problemSolvingScore,
      confidenceScore,
      strengths,
      weaknesses,
      questions,
    } = req.body;

    if (!candidateId || !role || overallScore === undefined) {
      return res.status(400).json({
        message: "candidateId, role and overallScore are required.",
      });
    }

    const interview = await Interview.create({
      candidateId,
      role,
      overallScore,
      technicalScore,
      communicationScore,
      problemSolvingScore,
      confidenceScore,
      strengths,
      weaknesses,
      questions,
    });

    res.status(201).json({
      message: "Interview report saved successfully.",
      interview,
    });
  } catch (error) {
    console.error("Create Interview Error:", error);

    res.status(500).json({
      message: "Failed to save interview report.",
    });
  }
};


// Dashboard data
const getDashboard = async (req, res) => {
  try {
    const { candidateId } = req.query;

    if (!candidateId) {
      return res.status(400).json({
        message: "candidateId is required.",
      });
    }

    const interviews = await Interview.find({
      candidateId,
    })
      .sort({ createdAt: -1 })
      .lean();

    res.json({
      candidate: {
        name: "Candidate",
      },
      interviews,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);

    res.status(500).json({
      message: "Failed to load dashboard data.",
    });
  }
};


// Get single interview report
const getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);

    if (!interview) {
      return res.status(404).json({
        message: "Interview report not found.",
      });
    }

    res.json(interview);
  } catch (error) {
    console.error("Get Report Error:", error);

    res.status(500).json({
      message: "Failed to load interview report.",
    });
  }
};


module.exports = {
  createInterview,
  getDashboard,
  getInterviewById,
};