import Papa from "papaparse";

// use raw data from CSSEGISandData repository on github
// https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv

// Data Format
// Provience/State  Country/Region  Lat Long    1/22/20 1/23/20 .... 4/7/20 ... today
const stateIndex = 0;
const countryIndex = 1;
const latitudeIndex = 2;
const longitudeIndex = 3;
const dataStartIndex = 4;
// 4, 5, 6 ... and so on --> result day by day start from 1/22/2020

// TO prevent cors issue use public heroku proxy
const HEROKU_CORS_PROXY_URL = "https://cors-anywhere.herokuapp.com";
const rawDataSource =
  "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

const GET_URL = HEROKU_CORS_PROXY_URL + "/" + rawDataSource;

const rawDataBackup = require("./assets/rawDataBackup.csv");

/**
 * raw data variable will be used to prevent repetitive request to
 * original github repository. Fetch it once and use it!
 */
let rawData = null;

/**
 * This function is used for preparing raw data either from original
 * CSSEGISandData github repository or local backup file rawDataBackup.csv
 * All possible conditions are handled in this function to prevent application crashes.
 */
const GetRawData = () => {
  return new Promise((resolve) => {
    if (rawData === null) {
      // If rawData is null then we haven't request to original data yet.
      // proceed with data request
      Papa.parse(GET_URL, {
        header: false,
        skipEmptyLines: true,
        download: true,
        dynamicTyping: true, //ensures that numbers not turned to strings
        complete: (res) => {
          // Fetch at once. Store it to rawData to use it later!
          rawData = res;
          resolve(rawData);
        },
        error: (err) => {
          // If we can not fetch live data from given url try to load
          // backup data from assets/rawDataBackup.csv
          Papa.parse(rawDataBackup, {
            header: false,
            skipEmptyLines: true,
            download: true,
            dynamicTyping: true, //ensures that numbers not turned to strings
            complete: (res) => {
              // Backup data successfully loaded. Store it to rawData to use it later!
              rawData = res;
              resolve(rawData);
            },
            error: (err) => {
              // this block of code should not be executed at all if backup
              // data is not corrupted - Defensive
              rawData = null;
              resolve(rawData);
            },
          });
        },
      });
    } else {
      // If rawData is not null then we already have got our data, return it.
      resolve(rawData);
    }
  });
};

/**
 * This function is used for getting all the coordinates from raw data which is
 * fetched by using GetRawData() alongside total case count and seperated
 * country/state knowledge.
 * This method is exported to use in components such as Map and Chart component
 */
const GetCountryStateData = async function () {
  return new Promise((resolve) => {
    GetRawData().then((raw) => {
      let months = [];
      let totalCol = raw.data[0].length;
      for (let i = dataStartIndex; i < totalCol; ++i) {
        let currMonth = new Date(raw.data[0][i]).getMonth();
        let isExist = months.findIndex((x) => x.month === currMonth);
        if (isExist === -1) {
          // if we encounter with new month then add it to month array
          // by giving day count as 1
          months.push({ month: currMonth, daysCount: 1 });
        } else {
          // if already exist in month array just increase day count by 1
          months[isExist].daysCount++;
        }
      }
      // now we have our month/day array as ready to be used disease counting

      // get rid of first line since it is header-column
      raw.data = raw.data.slice(1, raw.data.length);

      let coordinates = [];
      raw.data.forEach((row) => {
        let caseByMonth = [];
        let i = dataStartIndex;
        months.forEach((m) => {
          let count = 0;
          for (let j = i; j < i + m.daysCount; ++j) {
            count += row[j];
          }

          // now we have our monthly disease count here
          caseByMonth.push({ month: m.month, days: m.daysCount, count: count });

          // set next iteration index which will be used in for loop j element
          i += m.daysCount;
        });

        let totalCase = caseByMonth.reduce((sum, elem) => sum + elem.count, 0);

        coordinates.push({
          countryName: row[countryIndex] || "Undefined",
          stateName: row[stateIndex] || null,
          totalCase: totalCase,
          detailedCase: caseByMonth,
          x: row[longitudeIndex] || 0,
          y: row[latitudeIndex] || 0,
        });
      });

      // filter empty coordinates
      coordinates = coordinates.filter((elem) => {
        return elem.x !== 0 && elem.y !== 0;
      });

      console.log(coordinates);
      resolve(coordinates);
    });
  });
};

export { GetCountryStateData };
