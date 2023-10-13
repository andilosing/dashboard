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

function Chart({ type, data, options }) {
    const ChartComponent = {
        Bar: Bar,
        Doughnut: Doughnut,
        PolarArea: PolarArea
    }[type];

    return (
        <div className="chart">
            <ChartComponent data={data} options={options} />
        </div>
    );
}

export default Chart;
