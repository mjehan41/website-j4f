import React from "react";
import HeroSection from "../Components/hero-section";
import AboutSection from "../Components/about-section";
import StatSection from "../Components/stat-section";
import Timeline from "../Components/timeline";
import Footer from "../Components/footer";
import NavBar from "../Components/navbar";


export default function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <StatSection />
      <Timeline />
      <Footer />
    </div>
  );
}

