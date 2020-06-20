import React, { useEffect } from "react";
import ChartComponent from "chart.js";
import { GetCountryStateData } from "../data";

var ctx = null;
var Chart = {
  chart: null,
  backupData: null,
  Init: () => {
    // Cold Start
    FetchData("Turkey");
  },
  Update: (countryName, labels, data) => {
    // update chart data
    Chart.chart.clear();
    Chart.chart.data.labels = labels;
    Chart.chart.data.datasets.forEach((dataset) => {
      dataset.data = data;
    });
    Chart.chart.options.title.text = `Monthly Disease Count of ${countryName}`;
    Chart.chart.update();
  },
  Lookup: (data, countryName) => {
    // filter countries with given name
    let found = data.filter((elem) => {
      return elem.countryName === countryName;
    });

    // Defensive
    if (found.length < 1) {
      found = data.filter((elem) => {
        return elem.countryName === "Turkey";
      });
    }

    // return array of countries
    return found;
  },
};

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
      Chart.backupData = res;

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
      Chart.chart = new ChartComponent(ctx, {
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
  let countries = Chart.Lookup(Chart.backupData, countryName);

  // find out month names
  let labels = [];
  let data = [];
  // each country has same length of month so check the first one
  countries[0].detailedCase.forEach((elem) => {
    if (elem.month < monthsReference.length) {
      // labels for each month
      labels.push(monthsReference[elem.month]);

      // init data with 0 for each month
      data.push(0);
    }
  });

  // fill up monthly counts from filtered country list
  countries.forEach((country) => {
    let i = 0;
    country.detailedCase.forEach((elem) => {
      data[i] += elem.count;
      ++i;
    });
  });

  // renew chart data
  Chart.Update(countryName, labels, data);
}

function ChartCanvas(props) {
  useEffect(() => {
    // Initial State
    Chart.Init();
  }, []);

  useEffect(() => {
    // At first time we know that chart will be null
    // So that, take prop update only after initialization
    if (Chart.chart) {
      // if chart is not null than update it
      ReDraw(props.CountryName);
    }
  }, [props.CountryName]);
  return <canvas id="myChart"></canvas>;
}

export default ChartCanvas;
