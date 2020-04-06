import React, { useState, useEffect } from "react";
import "./App.scss";

// get map component
import Map from "./Components/Map";

// get exported javascript functions
import { getTotalRepoCount } from "./githubData.js";

// import github icon
import { ReactComponent as GithubLogo } from "./assets/github-brands.svg";

function App() {
  const [totalRepo, setTotalRepo] = useState(0);
  useEffect(() => {
    getTotalRepoCount().then((response) => setTotalRepo(response));
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
            <div id="Jan"></div>
            <div id="Feb"></div>
            <div id="March"></div>
            <div id="April"></div>
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
