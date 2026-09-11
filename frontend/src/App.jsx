import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import Vlog from "./Components/Vlog";
import Tools from "./Components/Tools";
import ATSAnalyzer from "./Pages/ATSAnalyzer";
import Recruiters from "./Pages/Recruiters";
import FAQ from "./Pages/FAQ";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import VoiceInterview from "./Pages/VoiceInterview";
import InterviewComplete from "./Pages/Interviewcomplete";
import Dashboard from "./Pages/Dashboard";
import StudyMaterial from "./Pages/StudyMaterial";
import ChatWidget from "./Components/ChatWidget";

function App() {
  const path = window.location.pathname;

  // Render current active page component
  const renderPage = () => {
    if (path === "/blogs") {
      return <Vlog />;
    }

    if (path === "/tools") {
      return <Tools />;
    }

    if (path === "/ats-analyzer") {
      return <ATSAnalyzer />;
    }

    if (path === "/recruiters") {
      return <Recruiters />;
    }

    if (path === "/faq") {
      return <FAQ />;
    }

    if (path === "/about") {
      return <About />;
    }

    if (path === "/login") {
      return <Login />;
    }

    if (path === "/signup") {
      return <Signup />;
    }

    if (path === "/voice-interview") {
      return <VoiceInterview />;
    }

    if (path === "/interview-complete") {
      return <InterviewComplete />;
    }

    // Dashboard
    if (path === "/dashboard") {
      return <Dashboard />;
    }

    // Study Material
    if (path === "/study-material") {
      return <StudyMaterial />;
    }

    return <Home />;
  };

  return (
    <>
      {/* Dynamic Active Page */}
      {renderPage()}

      {/* Floating AI Assistant - Multi-page Persistent */}
      <ChatWidget />
    </>
  );
}

export default App;