import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Topbar from "./components/Topbar";
import { Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import Table from "./components/Table";
import Chart from "./components/Chart";
import Zinseszinsrechner from "./components/Zinseszinsrechner";

function App() {
  const [isNavActive, setIsNavActive] = useState(false);

  const chartData1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green'],
    datasets: [
        {
            label: 'My First Dataset',
            data: [12, 19, 3, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        },
    ],
};

const chartData2 = {
    labels: ['A', 'B', 'C'],
    datasets: [
        {
            label: 'My Second Dataset',
            data: [5, 10, 15],
            backgroundColor: ['#FF9999', '#66FF66', '#6666FF'],
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
};

  return (
    <div className="container">
      <Navigation isActive={isNavActive} onNavClick={() => setIsNavActive(false)} />
      <div className={`main ${isNavActive ? "active" : ""}`}>
        <Topbar onToggleClick={() => setIsNavActive(!isNavActive)} />
        <Zinseszinsrechner />
      {/*}  <div className="cardBox"> 
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="chartsContainer">
        <Chart type="Bar" data={chartData1} options={options} />
                <Chart type="Doughnut" data={chartData2} options={options} />
        </div>
  <Table />     
        <Routes>
          <Route path="zinseszinsrechner" element={<Zinseszinsrechner />} />
        </Routes>*/} 
      </div>
    </div>
  );
}

export default App;
