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

      ctx = document.getElementById("myChart").getContext("2d");
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: "line",

        // The data for our dataset
        data: {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          datasets: [
            {
              label: active.countryName,
              backgroundColor: "rgb(255, 99, 132)",
              borderColor: "rgb(255, 99, 132)",
              data: [0, 10, 5, 2, 20, 30, 45],
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
