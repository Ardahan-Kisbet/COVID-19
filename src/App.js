import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

// get map component
import Map from "./Components/Map";

// get exported javascript functions
import { getTotalRepoCount, getRepoCounts } from "./githubData.js";

// import github icon
import { ReactComponent as GithubLogo } from "./assets/github-brands.svg";

const initialValueCountByMonth = [{ id: 0, value: 0 }];
const months = ["January", "February", "March", "April"];

function App() {
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
    <div className="content">
      <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100">
        <div className="d-flex flex-column w-100 h-100">
          <div>
            <div className="header-content d-flex justify-content-center">
              <div className="title mb-5">COVID Disease Tracker by Country</div>
            </div>
            <div className="d-flex">
              <div className="total-repo-count">
                Total number of COVID related repositories on Github:{" "}
                {totalRepo}
              </div>
              <div className="ml-auto" id="info"></div>
            </div>
          </div>
          <div className="w-100 h-50">
            <Map></Map>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            {countByMonths.map((countByMonth, index) => (
              <div key={countByMonth.id}>
                Repo Counts on {months[index]}: {countByMonth.value}
              </div>
            ))}
            <div id="location">Location: </div>
          </div>
          <div className="logo text-center h2 pb-3">
            <a
              className="h-100"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ardahan-Kisbet/COVID-19"
            >
              <GithubLogo className="svg h-100"></GithubLogo>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
