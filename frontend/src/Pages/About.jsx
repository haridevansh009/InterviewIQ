import React, { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (audio) {
      audio.currentTime = 0;

      // Try autoplay
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          console.log(
            "Autoplay blocked. Click Replay Voice to play."
          );
        });
    }

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const replayVoice = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      audio.pause();
      audio.currentTime = 0;

      await audio.play();
      setIsPlaying(true);
    } catch (error) {
      console.log("Audio play error:", error);
    }
  };

  return (
    <div className="about-page">

      {/* Recorded Voice */}
      <audio
        ref={audioRef}
        src="/audio/openai-fm-alloy-calm.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
      />

      <button
        className="about-back"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        ← Back to Home
      </button>

      <div className="about-card">

        <div className="about-avatar">
          🤖
        </div>

        <span className="about-badge">
          🤖 AI ASSISTANT
        </span>

        <h1>
          About <span>Interview IQ.AI</span>
        </h1>

        <p className="about-intro">
          Your AI-powered interview preparation companion,
          designed and developed by Devansh Bhardwaj.
        </p>

        <div className="about-voice-box">

          <div className="voice-icon">
            🔊
          </div>

          <div>
            <h3>
              AI is introducing Interview IQ.AI
            </h3>

            <p>
              Listen to the AI assistant to learn more about the platform.
            </p>
          </div>

        </div>

        <button
          className="replay-voice"
          onClick={replayVoice}
        >
          {isPlaying ? "🔊 Playing..." : "🔊 Replay Voice"}
        </button>

        <div className="about-features">

          <div>
            <span>🎤</span>
            <h3>Voice Interviews</h3>
            <p>
              Practice interviews naturally using your voice.
            </p>
          </div>

          <div>
            <span>🤖</span>
            <h3>AI Powered</h3>
            <p>
              Get smarter and interactive interview preparation.
            </p>
          </div>

          <div>
            <span>🎯</span>
            <h3>Improve Skills</h3>
            <p>
              Practice and improve your interview performance.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;