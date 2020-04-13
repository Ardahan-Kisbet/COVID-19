import Papa from "papaparse";

// use raw data from CSSEGISandData repository on github
// https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv

// Data Format
// Provience/State  Country/Region  Lat Long    1/22/20 1/23/20 .... 4/7/20 ... today
const stateIndex = 0;
const countryIndex = 1;
const latitudeIndex = 2;
const longitudeIndex = 3;
// 4, 5, 6 ... and so on --> result day by day start from 1/22/2020

// TO prevent cors issue use public heroku proxy
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

let rawData = null;
const GetRawData = () => {
  return new Promise((resolve) => {
    if (rawData === null) {
      Papa.parse(GET_URL, {
        header: false,
        skipEmptyLines: true,
        download: true,
        dynamicTyping: true, //ensures that numbers not turned to strings
        complete: (res) => {
          resolve(res);
        },
        error: (err) => {
          // If we can not fetch live data from given url try to load backup data from assets
          // TODO
          rawData = null;
          resolve(rawData);
        },
      });
    } else {
      resolve(rawData);
    }
  });
};

const GetCoordinateData = async function () {
  return new Promise((resolve) => {
    GetRawData().then((raw) => {
      let coordinates = [];
      // get only coordinates
      raw.data.forEach((row) => {
        coordinates.push({
          x: row[longitudeIndex] || 0,
          y: row[latitudeIndex] || 0,
        });
      });

      // SOME DATA CLEAN-UP
      // get rid of first line since it is header-column
      coordinates = coordinates.slice(1, coordinates.length);

      // filter empty coordinates
      coordinates = coordinates.filter((elem) => {
        return elem.x !== 0 && elem.y !== 0;
      });

      resolve(coordinates);
    });
  });
};

export { GetCoordinateData };
