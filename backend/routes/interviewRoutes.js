const express = require("express");

const {
  createInterview,
  getDashboard,
  getInterviewById,
} = require("../controllers/interviewController");

const router = express.Router();


// Save completed interview report
router.post("/", createInterview);


// Dashboard performance
router.get("/dashboard", getDashboard);


// Single interview report
router.get("/:id", getInterviewById);


module.exports = router;