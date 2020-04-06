import axios from "axios";

import { getRepoCounts } from "./githubData";

axios.get("https://ipapi.co/json/").then((res) => {
  document.getElementById("location").append(res.data.country_name);
});

getRepoCounts()
  .then(
    axios.spread((...res) => {
      console.log(res);
      const res1 = res[0];
      const res2 = res[1];
      const res3 = res[2];
      const res4 = res[3];
      console.log("res1 ", res1);
      console.log("res2 ", res2);
      console.log("res3 ", res3);
      console.log("res4 ", res4);
      document
        .getElementById("Jan")
        .append("January Total Count: " + res1.data.total_count);
      document
        .getElementById("Feb")
        .append("February Total Count: " + res2.data.total_count);
      document
        .getElementById("March")
        .append("March Total Count: " + res3.data.total_count);
      document
        .getElementById("April")
        .append("April Total Count: " + res4.data.total_count);
    })
  )
  .catch((err) => {
    console.log("error on getRepoCounts(): " + err);
  });
