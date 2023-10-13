import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Topbar from "./components/Topbar";
import { Routes } from "react-router-dom";
import Card from "./components/Card";
import Table from "./components/Table";
import Chart from "./components/Chart";

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  return (
    <div className="container">
      <Navigation isActive={isNavActive} />
      <div className={`main ${isNavActive ? "active" : ""}`}>
        <Topbar onToggleClick={() => setIsNavActive(!isNavActive)} />
        <div className="cardBox"> 
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="chartsContainer">
          <Chart ></Chart>
          <Chart ></Chart>
        </div>
        <Table />      
        <Routes>{/* Ihre Routen hier */}</Routes>
      </div>
    </div>
  );
}

export default App;
