import React, { useState, useEffect } from "react";
import "./App.scss";

// get map component
import Map from "./Components/Map";

// get exported javascript functions
import { getTotalRepoCount, getRepoCounts } from "./githubData.js";

// import github icon
import { ReactComponent as GithubLogo } from "./assets/github-brands.svg";

function App() {
  const [totalRepo, setTotalRepo] = useState(0);
  useEffect(() => {
    getTotalRepoCount().then((response) => setTotalRepo(response));

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
            <div>TODO graph and more results</div>
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
              {/* <img
                className="h-100"
                src={GithubLogo}
                alt="go to github repo"
              ></img> */}
              <GithubLogo className="svg h-100"></GithubLogo>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
