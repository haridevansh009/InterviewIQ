import React from "react";
import "./Home.css";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import HowItWorks from "../HowItWorks";
import SharpSection from "../Components/SharpSection";
import PricingCTA from "../Components/PricingCTA";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <HowItWorks />
      <SharpSection />
      <PricingCTA />
      <Footer />
    </div>
  );
}

export default Home;