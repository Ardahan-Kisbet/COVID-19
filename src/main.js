import axios from "axios";

import { getRepoCounts } from "./githubData";

axios.get("https://ipapi.co/json/").then((res) => {
  document.getElementById("location").append(res.data.country_name);
});

getRepoCounts().then((res) => {
  // const res1 = responses[0];
  // const res2 = responses[1];
  // const res3 = responses[2];
  // const res4 = responses[3];
  // console.log("res1 ", res1);
  // console.log("res2 ", res2);
  // console.log("res3 ", res3);
  // console.log("res4 ", res4);
  console.log("res " + res);
});
