import React, { useEffect, useState } from "react";
import ChartComponent from "chart.js";
import { GetCountryStateData } from "../data";
import CountryLookupTable from "../assets/countriesLookupTable";

const ChartRangeEnum = {
  ONE_YEAR: "one_year",
  THREE_YEAR: "three_year",
};

var ctx = null;
var Chart = {
  chart: null,
  backupData: null,
  chartRange: ChartRangeEnum.ONE_YEAR,
  Init: () => {
    // Cold Start
    FetchData("Turkey");
  },
  Update: (countryName, labels, data, total) => {
    // update chart data
    Chart.chart.clear();
    Chart.chart.data.labels = labels;
    Chart.chart.data.datasets.forEach((dataset) => {
      // there is only one dataset in array
      dataset.label = "";
      dataset.data = data;
    });
    Chart.chart.options.title.text = [
      `Monthly Disease Count of ${countryName}`,
      `(Total: ${total})`,
    ];
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
  FilterChartRange: (unfilteredCountryDiseaseData) => {
    // Filter raw country disease data in regards to current chart range selection
    switch (Chart.chartRange) {
      case ChartRangeEnum.ONE_YEAR:
        // current date
        let dateRangeEnd = new Date();
        // go back 1 year
        let dateRangeStart = new Date(dateRangeEnd.valueOf());
        dateRangeStart.setFullYear(dateRangeEnd.getFullYear() - 1);
        dateRangeStart.setDate(1);
        // filter only cases in date range
        return unfilteredCountryDiseaseData.filter((currentCase) => {
          let currentCasesDate = new Date(currentCase.year, currentCase.month);
          return (
            dateRangeStart <= currentCasesDate &&
            currentCasesDate <= dateRangeEnd
          );
        });
      default:
      // don't know yet what to do!
    }
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

      let active = res.find((elem) => {
        return elem.countryName === countryName;
      });

      // find out month names
      let labels = [];
      let data = [];
      let filteredData = Chart.FilterChartRange(active.detailedCase);
      filteredData.forEach((elem) => {
        if (elem.month < monthsReference.length) {
          labels.push(monthsReference[elem.month] + "(" + elem.year + ")");
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
              label: "",
              backgroundColor: "rgb(255, 255, 255, 0)",
              borderColor: "rgb(240, 94, 35)",
              data: data,
            },
          ],
        },

        // Configuration options go here
        options: {
          title: {
            display: true,
            text: [
              `Monthly Disease Count of ${active.countryName}`,
              `(Total: ${active.totalCase})`,
            ],
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

async function ReDraw(CountryName) {
  let countries = Chart.Lookup(Chart.backupData, CountryName);

  if (countries === null) {
    // then display "Not Found" component!
    return false;
  } else {
    // find out month names
    let labels = [];
    let data = [];

    // each country has same length of month so check the first one
    Chart.FilterChartRange(countries[0].detailedCase).forEach((elem) => {
      if (elem.month < monthsReference.length) {
        // labels for each month
        labels.push(monthsReference[elem.month] + "(" + elem.year + ")");

        // init data with 0 for each month
        data.push(0);
      }
    });

    // fill up monthly counts from filtered country list
    let total = 0;
    countries.forEach((country) => {
      total += country.totalCase;
      let i = 0;
      Chart.FilterChartRange(country.detailedCase).forEach((elem) => {
        data[i] += elem.count;
        ++i;
      });
    });

    // renew chart data
    Chart.Update(CountryName, labels, data, total);
  }

  return true;
}

function ChartCanvas(props) {
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
        setDataFound(await ReDraw(props.CountryName));
      }
    }

    draw();
  }, [props.CountryName]);

  // Note!: Do not remove chart canvas from DOM if data is not found since Chart Canvas is configurated only in INIT state via FetchData function
  // Just re-arrange visiblity on DOM
  return (
    <div className="h-100">
      <canvas
        id="myChart"
        style={{ display: dataFound === false ? "none" : "block" }}
      ></canvas>
      <div
        style={{
          background: "lightblue",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          display: dataFound === false ? "flex" : "none",
        }}
      >
        <strong>No Data Found for This Country</strong>
      </div>
    </div>
  );
}

export default ChartCanvas;
