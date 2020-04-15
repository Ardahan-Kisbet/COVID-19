import React, { useEffect } from "react";
import Chart from "chart.js";
import { GetCountryStateData } from "../data";

var ctx = null;

async function FetchData() {
  // Wait for response
  await GetCountryStateData()
    .then((res) => {
      // make tihs search according to selection on map later!
      // TODO
      let active = res.find((elem) => {
        return elem.countryName === "Turkey";
      });

      // find out month names
      let labels = [];
      let data = [];
      let monthsReference = [
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
      active.detailedCase.forEach((elem) => {
        if (elem.month < monthsReference.length) {
          labels.push(monthsReference[elem.month]);
          data.push(elem.count);
        }
      });

      ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: labels,
          datasets: [
            {
              label: active.countryName,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: data,
            },
          ],
        },

        // Configuration options go here
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

function ChartCanvas() {
  useEffect(() => {
    FetchData();
  }, []);
  return <canvas id="myChart"></canvas>;
}

export default ChartCanvas;
