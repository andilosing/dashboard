import React, { useState } from "react";
import { IonIcon } from "@ionic/react";
import { cashOutline } from "ionicons/icons";

import { Bar, Doughnut, PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  RadialLinearScale,
  Legend,
} from "chart.js";

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  RadialLinearScale,
  Legend
);

function Zinseszinsrechner() {
  const [anfangskapital, setAnfangskapital] = useState(5000);
  const [monatlicheSparrate, setMonatlicheSparrate] = useState(100);
  const [spardauer, setSpardauer] = useState(10);
  const [zinssatz, setZinssatz] = useState(5);
  const [gesamtEinzahlungen, setGesamtEinzahlungen] = useState(0);
const [gesamtZinsen, setGesamtZinsen] = useState(0);
const [gesamtEndbetrag, setGesamtEndbetrag] = useState(0);
const [isCalculated, setIsCalculated] = useState(false);
  const [ausschuttungsintervall, setAusschuttungsintervall] =
    useState("monatlich");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Einzahlungen",
        data: [],
        backgroundColor: "#36A2EB",
        stack: "Stack 0",
      },
      {
        label: "Zinsen",
        data: [],
        backgroundColor: "#FF6384",
        stack: "Stack 0",
      },
    ],
  });
  const berechneErgebnisse = (e) => {
    e.preventDefault();

    let fvAnfangskapital, fvSparrate, gesamtEinzahlungen, erhalteneZinsen;

    gesamtEinzahlungen = anfangskapital + monatlicheSparrate * spardauer * 12;

    if (ausschuttungsintervall === "monatlich") {
      const r = zinssatz / 100 / 12; // Monatlicher Zinssatz
      const n = spardauer * 12; // Gesamtzahl der Monate

      fvAnfangskapital = anfangskapital * Math.pow(1 + r, n);
      fvSparrate = monatlicheSparrate * ((Math.pow(1 + r, n) - 1) / r);
    } else if (ausschuttungsintervall === "jaehrlich") {
      const r = zinssatz / 100; // Jährlicher Zinssatz
      const n = spardauer; // Gesamtzahl der Jahre

      fvAnfangskapital = anfangskapital * Math.pow(1 + r, n);
      // Hier könnte die Formel für die jährliche Sparrate etwas anders aussehen,
      // je nachdem wie genau die Einzahlungen und die Zinsberechnungen erfolgen.
      // Hier ist ein einfaches Beispiel, wenn die Einzahlungen am Ende des Jahres erfolgen:
      fvSparrate = monatlicheSparrate * 12 * ((Math.pow(1 + r, n) - 1) / r);
    }

    erhalteneZinsen = fvAnfangskapital + fvSparrate - gesamtEinzahlungen;

    setGesamtEndbetrag(
      (fvAnfangskapital + fvSparrate).toFixed(2)
    );
   setGesamtEinzahlungen(gesamtEinzahlungen.toFixed(2))
   setGesamtZinsen(erhalteneZinsen.toFixed(2));

    erstelleChartData();
    setIsCalculated(true);
  };

  const erstelleChartData = () => {
    const labels = Array.from({ length: spardauer }, (_, i) => `Jahr ${i + 1}`);
    const einzahlungen = [];
    const zinsen = [];
    let kapital = anfangskapital;

    for (let i = 0; i < spardauer; i++) {
      let jahresEinzahlung = monatlicheSparrate * 12;
      let jahresZinsen = (kapital + jahresEinzahlung / 2) * (zinssatz / 100); // Angenommen, Einzahlungen werden monatlich vorgenommen

      kapital = kapital + jahresEinzahlung + jahresZinsen;

      einzahlungen.push(jahresEinzahlung * (i + 1) + anfangskapital); // Kumulierte Einzahlungen
      zinsen.push(kapital - einzahlungen[i]); // Zinsen = Aktuelles Kapital - Kumulierte Einzahlungen
    }

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Einzahlungen",
          data: einzahlungen,
          backgroundColor: "#36A2EB",
          stack: "Stack 0", // Stack identifier'#FF6384', '#36A2EB'
        },
        {
          label: "Zinsen",
          data: zinsen,
          backgroundColor: "#FF6384",
          stack: "Stack 0", // Stack identifier
        },
      ],
    });
  };

  return (
    <div className="zinseszinsContainer">
      <div className="zinseszinsForm">
        <h2>Zinseszinsrechner</h2>
        <form onSubmit={berechneErgebnisse}>
          <div className="formField">
            <label htmlFor="anfangskapital">Anfangskapital</label>
            <div className="inputContainer">
              <input
                type="number"
                id="anfangskapital"
                value={anfangskapital}
                onChange={(e) => setAnfangskapital(e.target.value)}
              />
              <span>€</span>
            </div>
          </div>
          <div className="formField">
            <label htmlFor="monatlicheSparrate">Sparrate</label>
            <div className="inputContainer">
              <input
                type="number"
                id="monatlicheSparrate"
                value={monatlicheSparrate}
                onChange={(e) => setMonatlicheSparrate(e.target.value)}
              />
              <span>€</span>
            </div>
          </div>
          <div className="formField">
            <label htmlFor="spardauer">Spardauer</label>
            <div className="inputContainer">
              <input
                type="number"
                id="spardauer"
                value={spardauer}
                onChange={(e) => setSpardauer(e.target.value)}
              />
              <span>Jahre</span>
            </div>
          </div>
          <div className="formField">
            <label htmlFor="zinssatz">Jährlicher Zinssatz</label>
            <div className="inputContainer">
              <input
                type="number"
                id="zinssatz"
                value={zinssatz}
                onChange={(e) => setZinssatz(e.target.value)}
              />
              <span>%</span>
            </div>
          </div>
          <div className="formField">
            <label htmlFor="ausschuttungsintervall">
              Ausschüttungsintervall
            </label>
            <div className="inputContainer">
              <select
                id="ausschuttungsintervall"
                value={ausschuttungsintervall}
                onChange={(e) => setAusschuttungsintervall(e.target.value)}
              >
                <option value="monatlich">monatlich</option>
                <option value="jaehrlich">jährlich</option>
              </select>
            </div>
          </div>
          <button type="submit">
            <span>Berechnen</span>
          </button>
        </form>
        {isCalculated && (
            <div className="ergebnisContainer">
                <h3>Berechnung</h3>
                <div className="ergebnisFelder">Endkapital <span>{gesamtEndbetrag} €</span> </div>
                <div className="ergebnisFelder">Gesamte Einzahlungen <span>{gesamtEinzahlungen} €</span> </div>
                <div className="ergebnisFelder">Erhaltene Zinszahlungen <span>{gesamtZinsen} €</span> </div>
            </div>
        )}
      </div>
      {isCalculated && (
            <>
                <div className="zinseszinsChart">
                    <Bar
                        data={chartData}
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    stacked: true, 
                                },
                                x: {
                                    stacked: true,
                                },
                            },
                            responsive: true,
                            maintainAspectRatio: false,
                        }}
                    />
                </div>
                <div className="zinseszinsChart">
                    <Doughnut 
                        data={{
                            labels: ['Einzahlungen', 'Zinsen'],
                            datasets: [{
                                data: [gesamtEinzahlungen, gesamtZinsen],
                                backgroundColor: ["#36A2EB", "#FF6384"]

                            }]
                        }}
                        options={{
                            responsive: true,
                            maintainAspectRatio: false
                        }}
                    />
                </div>
            </>
        )}
    </div>
  );
}

export default Zinseszinsrechner;
