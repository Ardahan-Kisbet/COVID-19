import axios from "axios";

// use raw data from CSSEGISandData repository on github
// https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv

// Data Format
// Provience/State  Country/Region  Lat Long    1/22/20 1/23/20 .... 4/7/20 ... today
const stateIndex = 0;
const countryIndex = 1;
const latitudeIndex = 2;
const longitudeIndex = 3;
// 4, 5, 6 ... and so on --> result day by day start from 1/22/2020

// TO prevent cors issue
const HEROKU_CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com";
const rawDataSource =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

const GET_URL = HEROKU_CORS_PROXY_URL + "/" + rawDataSource;

var split;
axios
  .get(GET_URL)
  .then((res) => {
    split = res.data.split("\n");
    split.forEach((elem, i) => {
      split[i] = new Array(elem.split(","));
    });
    // same with above
    // for (var i = 0; i < split.length; i++) {
    //   split[i] = new Array(split[i].split(","));
    // }
  })
  .then(() => {
    // console.log(split.length);
  });
