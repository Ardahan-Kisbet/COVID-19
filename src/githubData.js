import axios from "axios";

export const getTotalRepoCount = () => {
  return axios
    .get(
      "https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:>2020-01-01"
    )
    .then((res) => {
      return res.data.total_count;
    })
    .catch((err) => {
      console.log("error on getTotalRepoCount: " + err);
    });
};

export const getRepoCounts = () => {
  const urls = [
    "https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-01-01..2020-01-31",
    "https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-02-01..2020-02-29",
    "https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-03-01..2020-03-31",
    "https://api.github.com/search/repositories?q=covid OR coronavirus in:name,description+created:2020-04-01..*",
  ];

  const requests = [
    axios.get(urls[0]),
    axios.get(urls[1]),
    axios.get(urls[2]),
    axios.get(urls[3]),
  ];

  return axios
    .all([requests[0], requests[1], requests[2], requests[3]])
    .then(
      axios.spread((...responses) => {
        return responses;
        // const res1 = responses[0];
        // console.log("res1 ", res1);
      })
    )
    .catch((err) => {
      console.log("error on axios.all --> " + err);
    });
};
