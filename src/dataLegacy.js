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
