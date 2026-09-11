import React, { useState, useEffect, useRef } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Main Interview IQ AI Assistant hoon. Aap mujhse interview, coding, resume, ATS ya kisi bhi educational question ke baare mein pooch sakte hain.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userQuery = input.trim();

    // Previous conversation for AI context
    const previousMessages = messages.map((msg) => ({
      role: msg.sender === "user" ? "user" : "model",
      parts: [
        {
          text: msg.text,
        },
      ],
    }));

    // Show user's message immediately
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuery,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userQuery,
          history: previousMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.reply || "Server error");
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply || "Sorry, answer generate nahi ho paya.",
        },
      ]);
    } catch (error) {
      console.error("Chat Error:", error);

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, AI Assistant se connection nahi ho pa raha. Please check karein ki backend server running hai.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
      }}
    >
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            fontSize: "24px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          style={{
            width: "320px",
            height: "450px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            border: "1px solid #e0e0e0",
            fontFamily: "sans-serif",
          }}
        >
          {/* Header */}
          <div
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "12px 16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontWeight: "bold",
            }}
          >
            <span>Interview IQ AI</span>

            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: "12px",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  alignSelf:
                    msg.sender === "user"
                      ? "flex-end"
                      : "flex-start",

                  backgroundColor:
                    msg.sender === "user"
                      ? "#007bff"
                      : "#f1f1f1",

                  color:
                    msg.sender === "user"
                      ? "#fff"
                      : "#333",

                  padding: "8px 12px",
                  borderRadius: "10px",
                  maxWidth: "80%",
                  fontSize: "14px",
                  wordBreak: "break-word",
                  whiteSpace: "pre-wrap",
                }}
              >
                {msg.text}
              </div>
            ))}

            {/* Loading */}
            {loading && (
              <div
                style={{
                  fontSize: "12px",
                  color: "#888",
                  fontStyle: "italic",
                }}
              >
                AI soch raha hai...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #e0e0e0",
              padding: "8px",
              backgroundColor: "#fff",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend();
                }
              }}
              placeholder="Sawaal puchiye..."
              disabled={loading}
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                padding: "8px",
                fontSize: "14px",
              }}
            />

            <button
              onClick={handleSend}
              disabled={loading || !input.trim()}
              style={{
                backgroundColor:
                  loading || !input.trim() ? "#999" : "#007bff",
                color: "#fff",
                border: "none",
                padding: "8px 12px",
                borderRadius: "6px",
                cursor:
                  loading || !input.trim()
                    ? "not-allowed"
                    : "pointer",
                fontWeight: "bold",
              }}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;