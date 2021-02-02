import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import FirstInfo from "./components/info/FirstInfo";
import SecondInfo from "./components/info/SecondInfo";
import ThirdInfo from "./components/info/ThirdInfo";
import TextSection from "./components/textSection/TextSection";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <Hero />
        <FirstInfo />
        <SecondInfo />
        <ThirdInfo />
        <TextSection />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
