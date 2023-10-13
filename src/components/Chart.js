import React from "react";
import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";
import { Bar, Doughnut, PolarArea } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    RadialLinearScale,
    Legend
}from 'chart.js';

ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    RadialLinearScale,
    Legend
)

function Chart() {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green'],
        datasets: [
          {
            labe: '369',
            data: [12, 19, 3, 5],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      };

      const options = {
        responsive: true,

      }


  return (
    <div className="chart">
        
        <Bar data={data}
        options={options}> </Bar> 
    </div>
    
  );
}

export default Chart;
