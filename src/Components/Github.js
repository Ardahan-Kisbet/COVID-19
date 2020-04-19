import React, { useState, useEffect } from "react";
import axios from "axios";
// get exported javascript functions
import { getTotalRepoCount, getRepoCounts } from "./githubData.js";

const initialValueCountByMonth = [
  { id: 0, value: 0 },
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
];
const months = ["January", "February", "March", "April"];

function Github() {
  const [totalRepo, setTotalRepo] = useState(0);
  const [countByMonths, setCountByMonths] = useState(initialValueCountByMonth);
  useEffect(() => {
    getTotalRepoCount().then((response) => setTotalRepo(response));

    getRepoCounts()
      .then(
        axios.spread((...res) => {
          var [...temp] = [...res];
          const fetchedCountByMonth = temp.map((val, index) => {
            return { id: index, value: val.data.total_count };
          });
          setCountByMonths(fetchedCountByMonth);
        })
      )
      .catch((err) => {
        console.log("error on getRepoCounts(): " + err);
      });
  }, []);

  return (
    <div className="bg-dark">
      <div className="total-repo-count">
        Total number of COVID related repositories on Github: {totalRepo}
      </div>
      {countByMonths.map((countByMonth, index) => (
        <div key={countByMonth.id}>
          Repo Counts on {months[index]}: {countByMonth.value}
        </div>
      ))}
    </div>
  );
}

export default Github;
