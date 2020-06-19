import React, { useEffect } from "react";
import Chart from "chart.js";
import { GetCountryStateData } from "../data";

var ctx = null;
var chart;
var backupData = null;
const monthsReference = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

async function FetchData(countryName) {
  // Wait for response
  await GetCountryStateData()
    .then((res) => {
      // store it for further use!
      backupData = res;

      // make this search according to selection on map later!
      let active = res.find((elem) => {
        return elem.countryName === countryName;
      });

      // find out month names
      let labels = [];
      let data = [];

      active.detailedCase.forEach((elem) => {
        if (elem.month < monthsReference.length) {
          labels.push(monthsReference[elem.month]);
          data.push(elem.count);
        }
      });

      ctx = document.getElementById("myChart").getContext("2d");
      chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: labels,
          datasets: [
            {
              label: "Count",
              // backgroundColor: "rgb(255, 99, 132)",
              backgroundColor: "rgb(255, 255, 255, 0)",
              borderColor: "rgb(255, 99, 132)",
              data: data,
            },
          ],
        },

        // Configuration options go here
        options: {
          title: {
            display: true,
            text: `Monthly Disease Count of ${active.countryName}`,
          },
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

async function ReDraw(countryName) {
  // Wait for response

  let active = backupData.find((elem) => {
    return elem.countryName === countryName;
  });

  // TODO geojson country name ile data arasındaki country nameler birebir örtüşmüyor hepsinde.
  // Lookup table yap!

  if (!active) {
    active = backupData.find((elem) => {
      return elem.countryName === "Turkey";
    });
  }

  // find out month names
  let labels = [];
  let data = [];

  active.detailedCase.forEach((elem) => {
    if (elem.month < monthsReference.length) {
      labels.push(monthsReference[elem.month]);
      data.push(elem.count);
    }
  });

  // TODO kodu kısalt- tekrar kodları sil
  // https://www.chartjs.org/docs/latest/developers/updates.html

  chart.clear();
  chart.data.labels = labels;
  chart.data.datasets.forEach((dataset) => {
    dataset.data = data;
  });
  chart.options.title.text = `Monthly Disease Count of ${active.countryName}`;
  chart.update();
}

function updateChart(countryName) {
  ReDraw(countryName);
}

function ChartCanvas(props) {
  useEffect(() => {
    // Initial State
    FetchData("Turkey");
  }, []);

  useEffect(() => {
    // At first time we know that chart will be null
    // So that, take prop update only after initialization
    if (chart) {
      updateChart(props.CountryName);
    }
  }, [props.CountryName]);
  return <canvas id="myChart"></canvas>;
}

export default ChartCanvas;
