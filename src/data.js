import axios from "axios";

// use raw data from CSSEGISandData repository on github
// https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv

// Data Format
// Provience/State  Country/Region  Lat Long    1/22/20 1/23/20 .... 4/7/20 ... today
const stateIndex = 0;
const countryIndex = 1;
const latitudeIndex = 2; // Y
const longitudeIndex = 3; // X
// 4, 5, 6 ... and so on --> result day by day start from 1/22/2020

// TO prevent cors issue
const HEROKU_CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com";
const rawDataSource =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

const GET_URL = HEROKU_CORS_PROXY_URL + "/" + rawDataSource;

// Create one dimensional array
var raw;

axios.get(GET_URL).then((res) => {
  raw = res.data.split("\n");
  raw.forEach(function (elem, i) {
    this[i] = elem.split(",");
  }, raw);

  console.log(raw.filter((elem) => elem[countryIndex] === "Turkey"));
});
