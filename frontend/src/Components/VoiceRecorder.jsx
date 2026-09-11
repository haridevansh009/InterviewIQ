import React, { useEffect, useRef, useState } from "react";
import "./VoiceInterview.css";

function VoiceInterview() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [questionNumber, setQuestionNumber] = useState(1);

  const recognitionRef = useRef(null);
  const shouldKeepRecordingRef = useRef(false);
  const finalTranscriptRef = useRef("");

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

  const question =
    questions[questionNumber - 1] || questions[0];

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

    recognition.onstart = () => {
      setIsRecording(true);
    };

    recognition.onresult = (event) => {
      let interimTranscript = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        const text = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscriptRef.current += text + " ";
        } else {
          interimTranscript += text;
        }
      }

      setTranscript(
        finalTranscriptRef.current + interimTranscript
      );
    };

    recognition.onerror = (event) => {
      console.log(
        "Speech recognition error:",
        event.error
      );

      if (
        event.error === "no-speech" ||
        event.error === "aborted"
      ) {
        return;
      }

      shouldKeepRecordingRef.current = false;
      setIsRecording(false);
    };

    recognition.onend = () => {
      if (shouldKeepRecordingRef.current) {
        try {
          recognition.start();
        } catch (error) {
          console.log(
            "Recognition restart:",
            error
          );
        }
      } else {
        setIsRecording(false);
      }
    };

    recognitionRef.current = recognition;

    return () => {
      shouldKeepRecordingRef.current = false;

      try {
        recognition.stop();
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  const startRecording = () => {
    if (!recognitionRef.current) {
      alert(
        "Your browser does not support voice recognition. Please use Google Chrome."
      );
      return;
    }

    finalTranscriptRef.current = "";
    setTranscript("");

    shouldKeepRecordingRef.current = true;

    try {
      recognitionRef.current.start();
    } catch (error) {
      console.log("Recognition already running.");
    }
  };

  const stopRecording = () => {
    shouldKeepRecordingRef.current = false;

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.log(error);
      }
    }

    setIsRecording(false);
  };

  const submitAnswer = () => {
    if (!transcript.trim()) {
      alert("Please record your answer first.");
      return;
    }

    shouldKeepRecordingRef.current = false;

    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch (error) {
        console.log(error);
      }
    }

    if (questionNumber < questions.length) {
      setQuestionNumber((prev) => prev + 1);

      finalTranscriptRef.current = "";
      setTranscript("");
      setIsRecording(false);

      // Automatically speak the next question
      setTimeout(() => {
        const nextQuestion =
          questions[questionNumber];

        window.speechSynthesis.cancel();

        const speech =
          new SpeechSynthesisUtterance(nextQuestion);

        speech.lang = "en-US";
        speech.rate = 0.9;

        window.speechSynthesis.speak(speech);
      }, 500);
    } else {
      alert(
        "🎉 Interview completed successfully!"
      );

      finalTranscriptRef.current = "";
      setTranscript("");
      setIsRecording(false);
    }
  };

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
                <p>{transcript}</p>
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