import React, { useEffect, useState } from "react";
import ChartComponent from "chart.js";
import CountryLookupTable from "../assets/countriesLookupTable";
import { GetDeathsGlobalData, GetRecoveredGlobalData } from "../data";

var ctx = null;
var Chart = {
  chart: null,
  backupDataDeaths: null,
  backupDataRecovered: null,
  Init: () => {
    // Cold Start
    FetchData("Turkey");
  },
  Update: () => {},
};

async function FetchData(countryName) {
  let totalDeath = 0;
  let totalRecover = 0;

  // Wait for response
  await GetDeathsGlobalData().then((res) => {
    // store it for further use!
    Chart.backupDataDeaths = res;

    // make this search according to selection on map later!
    let active = res.find((elem) => {
      return elem.countryName === countryName;
    });

    totalDeath = active.totalCase;
  });

  // Wait for response
  await GetRecoveredGlobalData().then((res) => {
    // store it for further use!
    Chart.backupDataRecovered = res;

    // make this search according to selection on map later!
    let active = res.find((elem) => {
      return elem.countryName === countryName;
    });

    totalRecover = active.totalCase;
  });

  // And for a doughnut chart
  ctx = document.getElementById("myPieChart").getContext("2d");
  var myDoughnutChart = new ChartComponent(ctx, {
    type: "doughnut",
    data: {
      datasets: [
        {
          backgroundColor: [
            // lightgray
            "rgb(211, 211, 211)",
            // lightgreen
            "rgb(144,238,144)",
          ],
          borderColor: "rgb(255,255,255)",
          data: [totalDeath, totalRecover],
        },
      ],

      // These labels appear in the legend and in the tooltips when hovering different arcs
      labels: ["Deaths", "Recoveries"],
    },
    //options: options
  });
}

async function ReDraw(CountryName) {}

function PieChartCanvas(props) {
  useEffect(() => {
    // Initial State
    Chart.Init();
  }, []);

  useEffect(() => {
    // At first time we know that chart will be null
    // So that, take prop update only after initialization
    async function draw() {
      if (Chart.chart) {
        // if chart is not null than update it
        await ReDraw(props.CountryName);
      }
    }

    draw();
  }, [props.CountryName]);
  return (
    <div>
      <canvas id="myPieChart"></canvas>
    </div>
  );
}

export default PieChartCanvas;
