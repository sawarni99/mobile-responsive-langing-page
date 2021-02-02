import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body">
        <Hero />
      </div>
      <div className="app-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
