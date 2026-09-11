import React from "react";
import "./SharpSection.css";

function SharpSection() {
  const items = [
    {
      number: "1",
      side: "left",
      title: "You Prepared Great Answers... Then Forgot Them Under Pressure",
      description:
        'Store all your STAR stories, accomplishments, and talking points in InterviewIQ. When the question comes up, your exact prep appears on screen. No more "I know I had a great example for this..."',
      icon: "✦",
      color: "blue",
    },
    {
      number: "2",
      side: "right",
      title: "You Get Hit With a Question You Didn't Prep",
      description:
        "AI instantly generates 3-4 bullet points from your resume: relevant projects, metrics, or achievements. Just enough to spark your memory and keep you talking naturally.",
      icon: "✦",
      color: "purple",
    },
    {
      number: "3",
      side: "left",
      title: "You Waste Seconds Trying to Remember Details",
      description:
        "Your metrics, dates, project names, and key details are right there. Stay in flow instead of frantically searching your memory for that percentage increase or team size.",
      icon: "◈",
      color: "orange",
    },
    {
      number: "4",
      side: "right",
      title: "Your Notes Are Useless During the Interview",
      description:
        "No more Alt+Tabbing to Google Docs or shuffling papers. Your prep integrates directly into the interview window. The interviewer sees you engaged; you see your answers.",
      icon: "↗",
      color: "pink",
    },
    {
      number: "5",
      side: "left",
      title: "Always Prepared, Zero Maintenance",
      description:
        "Install your live interview tool once and it works on every call. No setup required for future interviews. Your AI interview assistant runs automatically and provides real-time interview help without any maintenance.",
      icon: "◎",
      color: "green",
    },
  ];

  return (
    <section className="sharp-section">
      <div className="sharp-container">

        <div className="sharp-heading">
          <span className="sharp-badge">
            ✦ INTERVIEW IQ ADVANTAGE
          </span>

          <h2>
            How InterviewIQ
            <span> Keeps You Sharp</span>
          </h2>

          <p>
            Your prep work, organized and accessible when it matters most.
          </p>
        </div>

        <div className="sharp-timeline">
          <div className="sharp-center-line"></div>

          {items.map((item) => (
            <div
              className={`sharp-item ${item.side}`}
              key={item.number}
            >
              <div className={`sharp-card ${item.color}`}>
                <div className="sharp-card-icon">
                  {item.icon}
                </div>

                <div className="sharp-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className={`sharp-number ${item.color}`}>
                {item.number}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default SharpSection;