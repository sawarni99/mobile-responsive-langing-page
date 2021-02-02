import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Navbar />
      </div>
      <div className="app-body"></div>
      <div className="app-footer"></div>
    </div>
  );
}

export default App;
