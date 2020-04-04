import axios from "axios";

axios.get("https://ipapi.co/json/").then(res => {
  document.getElementById("location").append(res.data.country_name);
});

export const getTotalRepoCount = () => {
  return axios
    .get(
      "https://api.github.com/search/repositories?q=covid in:name,description+created:>2020-01-01"
    )
    .then(res => {
      return res.data.total_count;
    });
};
