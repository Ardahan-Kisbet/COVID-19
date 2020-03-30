import axios from "axios";

axios.get("https://ipapi.co/json/").then(res => {
  document.getElementById("location").append(res.data.country_name);
});
