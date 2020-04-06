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

function App() {
  const [totalRepo, setTotalRepo] = useState(0);
  const [countByMonths, setCountByMonths] = useState(initialValueCountByMonth);

  useEffect(() => {
    getTotalRepoCount().then((response) => setTotalRepo(response));

    getRepoCounts()
      .then(
        axios.spread((...res) => {
          const res1 = res[0];
          const res2 = res[1];
          const res3 = res[2];
          const res4 = res[3];
          const fetchedCountByMonth = [
            { id: 1, value: res1.data.total_count },
            { id: 2, value: res2.data.total_count },
            { id: 3, value: res3.data.total_count },
            { id: 4, value: res4.data.total_count },
          ];
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
              <div className="title mb-5">
                Newly Created Github Repos about COVID in 2020
              </div>
            </div>
            <div className="d-flex flex-column">
              <div className="total-repo-count">
                Total number of COVID related repositories: {totalRepo}
              </div>
            </div>
          </div>
          <div className="w-100 h-50">
            <Map></Map>
          </div>
          <div className="d-flex flex-column flex-grow-1">
            {countByMonths.map((countByMonth, index) => (
              <div key={countByMonth.id}>{countByMonth.value}</div>
            ))}
            <div id="location">Location: </div>
            <div id="info"></div>
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
