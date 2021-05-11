import React, { useEffect, useState } from "react";
import ChartComponent from "chart.js";
import CountryLookupTable from "../assets/countriesLookupTable";
import { GetDeathsGlobalData, GetRecoveredGlobalData } from "../data";

var ctx = null;
var Chart = {
  chart: null,
  backupDataDeaths: null,
  backupDataRecovered: null,
  labels: ["Deaths", "Recoveries"],
  Init: () => {
    // Cold Start
    FetchData("Turkey");
  },
  Update: (data) => {
    // update chart data
    Chart.chart.clear();
    Chart.chart.data.labels = Chart.labels;
    Chart.chart.data.datasets.forEach((dataset) => {
      // there is only one dataset in array
      dataset.data = data;
    });
    Chart.chart.update();
  },
  Lookup: (data, countryName) => {
    // filter countries with given name
    let found = data.filter((elem) => {
      return elem.countryName === CountryLookupTable[countryName];
    });

    // Defensive
    if (found.length < 1) {
      // If there is no data for selected country then show "Not Found" component
      found = null;
    }

    // return array of countries
    return found;
  },
};

async function FetchData(countryName) {
  let totalDeath = 0;
  let totalRecover = 0;

  // Wait for response
  await GetDeathsGlobalData().then((res) => {
    // store it for further use!
    Chart.backupDataDeaths = res;

    let actives = res.filter((elem) => {
      return elem.countryName === CountryLookupTable[countryName];
    });

    actives.forEach((active) => {
      totalDeath += active.totalCase;
    });
  });

  // Wait for response
  await GetRecoveredGlobalData().then((res) => {
    // store it for further use!
    Chart.backupDataRecovered = res;

    let actives = res.filter((elem) => {
      return elem.countryName === CountryLookupTable[countryName];
    });

    actives.forEach((active) => {
      totalRecover += active.totalCase;
    });
  });

  // And for a doughnut chart
  ctx = document.getElementById("myPieChart").getContext("2d");
  Chart.chart = new ChartComponent(ctx, {
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
      labels: Chart.labels,
    },
    //options: options
  });
}

async function ReDraw(CountryName) {
  let countriesForDeaths = Chart.Lookup(Chart.backupDataDeaths, CountryName);
  let countriesForRecoveries = Chart.Lookup(
    Chart.backupDataRecovered,
    CountryName
  );

  if (countriesForDeaths === null || countriesForRecoveries === null) {
    // then display "Not Found" component!
    return false;
  } else {
    let data,
      totalDeath = 0,
      totalRecovery = 0;
    countriesForDeaths.forEach((country) => {
      totalDeath += country.totalCase;
    });
    countriesForRecoveries.forEach((country) => {
      totalRecovery += country.totalCase;
    });

    data = [totalDeath, totalRecovery];

    // renew chart data
    Chart.Update(data);
  }

  return true;
}

function PieChartCanvas(props) {
  const [dataFound, setDataFound] = useState(true);
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
        if (await ReDraw(props.CountryName)) {
          setDataFound(true);
        } else {
          setDataFound(false);
        }
      }
    }

    draw();
  }, [props.CountryName]);
  return (
    <div>
      <canvas
        id="myPieChart"
        style={{ display: dataFound === false ? "none" : "block" }}
      ></canvas>
    </div>
  );
}

export default PieChartCanvas;
