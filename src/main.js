import axios from "axios";

axios.get("http://ip-api.com/json").then(res => {
  console.log(res.data.country);
});
