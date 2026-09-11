import React, { useEffect, useRef, useState } from "react";
import "./VoiceInterview.css";

function VoiceInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);

  const recognitionRef = useRef(null);
  const transcriptRef = useRef("");

  // Interview Questions
  const questions = [
    "Tell me about yourself.",

    "Can you explain your major projects and the technologies you used in them?",

    "What are your programming skills and which programming languages are you most comfortable with?",

    "What is your strongest technical skill, and how have you used it in your projects?",

    "What is the difference between frontend and backend development?",

    "Explain what React.js is and why you would use it in a web application.",

    "What is a REST API and how does it work?",

    "What is the difference between SQL and NoSQL databases?",

    "Tell me about a difficult problem you faced while developing a project and how you solved it.",

    "Why should we hire you, and what value can you bring to our team?"
  ];

  // Current Question
  const question =
    questions[questionNumber - 1] || questions[0];

  // Speech Recognition Setup
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let fullText = "";

      // Read all speech recognition results
      for (let i = 0; i < event.results.length; i++) {
        fullText += event.results[i][0].transcript + " ";
      }

      fullText = fullText.trim();

      // Update transcript
      transcriptRef.current = fullText;
      setTranscript(fullText);
    };

    recognition.onend = () => {
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.log("Speech recognition error:", event.error);

      if (event.error === "not-allowed") {
        alert(
          "Microphone permission denied. Please allow microphone access in Chrome."
        );
      }
    };

    recognitionRef.current = recognition;

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (error) {
          console.log(error);
        }
      }
    };
  }, []);

  // Start Recording
  const startRecording = () => {
    if (!recognitionRef.current) {
      alert(
        "Your browser does not support voice recognition. Please use Google Chrome."
      );
      return;
    }

    // Clear previous answer
    transcriptRef.current = "";
    setTranscript("");

    setIsRecording(true);

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.log("Recording already started.");
    }
  };

  // Stop Recording
  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.log(error);
      }
    }

    setIsRecording(false);
  };

  // Submit Answer
  const submitAnswer = () => {
    const answer = transcriptRef.current.trim();

    // Check answer
    if (!answer) {
      alert("Please record your answer first.");
      return;
    }

    // Stop recording
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.log(error);
      }
    }

    setIsRecording(false);

    // Get previously saved answers
    let savedAnswers = [];

    try {
      savedAnswers =
        JSON.parse(
          sessionStorage.getItem("interviewAnswers")
        ) || [];
    } catch (error) {
      console.log("Could not read saved answers:", error);
      savedAnswers = [];
    }

    // Create current answer object
    const newAnswer = {
      questionNumber: questionNumber,
      question: question,
      answer: answer
    };

    // Remove old answer for the same question if it exists
    const filteredAnswers = savedAnswers.filter(
      (item) =>
        item.questionNumber !== questionNumber
    );

    // Add current answer
    const updatedAnswers = [
      ...filteredAnswers,
      newAnswer
    ];

    // Save answers
    sessionStorage.setItem(
      "interviewAnswers",
      JSON.stringify(updatedAnswers)
    );

    // If questions are remaining
    if (questionNumber < questions.length) {
      alert("Answer submitted successfully!");

      setQuestionNumber((prev) => prev + 1);

      // Clear current transcript
      transcriptRef.current = "";
      setTranscript("");
    }

    // Interview completed
    else {
      // Save interview information
      sessionStorage.setItem(
        "interviewTotalQuestions",
        questions.length.toString()
      );

      sessionStorage.setItem(
        "interviewCompleted",
        "true"
      );

      // Go to completion page
      window.location.href =
        "/interview-complete";
    }
  };

  // Speak Question
  const speakQuestion = () => {
    window.speechSynthesis.cancel();

    const speech =
      new SpeechSynthesisUtterance(question);

    speech.lang = "en-US";
    speech.rate = 0.9;

    window.speechSynthesis.speak(speech);
  };

  return (
    <div className="voice-interview-page">

      {/* Header */}
      <div className="voice-header">

        <button
          className="voice-back"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ← Home
        </button>

        <div className="voice-brand">
          <span>🤖</span>
          Interview<span>IQ.AI</span>
        </div>

        <div className="voice-progress">
          Question {questionNumber}/{questions.length}
        </div>

      </div>

      {/* Main */}
      <div className="voice-container">

        <div className="voice-title">

          <span className="voice-badge">
            🎤 LIVE VOICE INTERVIEW
          </span>

          <h1>
            AI Mock Interview
          </h1>

          <p>
            Answer naturally. Our AI will listen, analyze your answer,
            and help you improve.
          </p>

        </div>

        {/* Interview Card */}
        <div className="voice-card">

          <div className="interviewer">

            <div className="ai-avatar">
              🤖
            </div>

            <div>
              <span>AI Interviewer</span>

              <h2>
                Question {questionNumber}
              </h2>
            </div>

            <button
              className="speak-question"
              onClick={speakQuestion}
              title="Listen to question"
            >
              🔊
            </button>

          </div>

          {/* Question */}
          <div className="question-box">

            <p>
              {question}
            </p>

          </div>

          {/* Recorder */}
          <div className="recorder-section">

            <div
              className={`mic-button ${
                isRecording ? "recording" : ""
              }`}
              onClick={
                isRecording
                  ? stopRecording
                  : startRecording
              }
            >
              {isRecording ? "⏹" : "🎙️"}
            </div>

            <h3>
              {isRecording
                ? "Listening..."
                : "Click the microphone to answer"}
            </h3>

            <p>
              {isRecording
                ? "Speak clearly and answer naturally"
                : "Your answer will appear below"}
            </p>

          </div>

          {/* Transcript */}
          <div className="answer-section">

            <div className="answer-header">

              <h3>
                Your Answer
              </h3>

              {isRecording && (
                <span className="recording-status">
                  ● Recording
                </span>
              )}

            </div>

            <div className="answer-box">

              {transcript ? (
                <p>
                  {transcript}
                </p>
              ) : (
                <span>
                  Your spoken answer will appear here...
                </span>
              )}

            </div>

          </div>

          {/* Actions */}
          <div className="voice-actions">

            <button
              className="stop-button"
              onClick={stopRecording}
              disabled={!isRecording}
            >
              Stop Recording
            </button>

            <button
              className="submit-answer"
              onClick={submitAnswer}
            >
              Submit Answer →
            </button>

          </div>

        </div>

        {/* Tips */}
        <div className="voice-tips">

          <div>
            <span>💡</span>
            <strong>Tip:</strong>
            Keep your answer clear and structured.
          </div>

          <div>
            <span>🎯</span>
            Try to answer within 1–2 minutes.
          </div>

          <div>
            <span>🤖</span>
            AI feedback will be available after submission.
          </div>

        </div>

      </div>

    </div>
  );
}

export default VoiceInterview;