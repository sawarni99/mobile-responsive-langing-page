import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import FirstInfo from "./components/info/FirstInfo";
import SecondInfo from "./components/info/SecondInfo";
import ThirdInfo from "./components/info/ThirdInfo";
import TextSection from "./components/textSection/TextSection";
import Team from "./components/team/Team";
import ReviewView from "./components/reviewView/ReviewView";
import CTA from "./components/cta/CTA";
import CardSlider from "./components/cardSlider/CardSlider";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <div className="app-background-hero" />
        <Hero />
        <div className="app-background-info">
          <div className="app-background-info-grad" />
          <FirstInfo />
          <SecondInfo />
          <ThirdInfo />
        </div>
        <div className="app-slider-card">
          <CardSlider />
        </div>
        <TextSection />
        <Team />
        <ReviewView />
        <CTA />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
