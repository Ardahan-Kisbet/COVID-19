import React, { useState, useEffect } from "react";
import axios from "axios";
// get exported javascript functions
import { getTotalRepoCount, getRepoCounts } from "../githubData";

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
      <table class="table table-dark table-hover">
        <tbody>
          {countByMonths.map((countByMonth, index) => (
            <tr>
              <td>Repo Counts on {months[index]}</td>
              <td>{countByMonth.value}</td>
              {/* <div key={countByMonth.id}> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Github;
