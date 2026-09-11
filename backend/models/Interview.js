const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
  {
    candidateId: {
      type: String,
      required: true,
      index: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    overallScore: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },

    technicalScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    communicationScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    problemSolvingScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    confidenceScore: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    strengths: {
      type: [String],
      default: [],
    },

    weaknesses: {
      type: [String],
      default: [],
    },

    questions: [
      {
        question: String,
        answer: String,
        score: {
          type: Number,
          min: 0,
          max: 10,
        },
        feedback: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Interview", interviewSchema);