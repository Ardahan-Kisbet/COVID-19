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

// Plain way to deal with csv
// Do not use this way. Use PAPAPARSE!

// import axios from "axios";

// Variable Definitions
// var raw, countries, coordinates;

// axios.get(GET_URL).then((res) => {
//   raw = res.data.split("\n");
//   raw.forEach(function (elem, i) {
//     this[i] = elem.split(",");
//   }, raw);

//   // get rid of first line since it is header-column
//   raw = raw.slice(1, raw.length);

//   // seperate meaningful data
//   seperateCountries();
//   seperateCoordinates();
//   // console.log(raw.filter((elem) => elem[countryIndex] === "Turkey"));
// });

// const seperateCountries = () => {
//   countries = Array.from(raw, (r) => r[countryIndex]);
//   // console.log(countries);
// };

// const seperateCoordinates = () => {
//   coordinates = Array.from(raw, (r) => ({
//     x: parseInt(r[longitudeIndex]) || 0,
//     y: parseInt(r[latitudeIndex]) || 0,
//   }));
//   // console.log(coordinates);
// };

// const getCoordinates = () => {
//   return coordinates;
// };

// export { getCoordinates };

export { GET_URL, latitudeIndex, longitudeIndex, countryIndex };
