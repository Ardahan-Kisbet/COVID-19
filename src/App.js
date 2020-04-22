import React from "react";
import "./App.scss";
// get map component
import Map from "./Components/Map";
// get chart component
import ChartCanvas from "./Components/Chart";
// get github component
import Github from "./Components/Github";
// import github icon
import { ReactComponent as GithubLogo } from "./assets/github-brands.svg";

function App() {
  return (
    <div className="content">
      <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100">
        <div className="d-flex flex-column w-100 h-100">
          <div className="header-content d-flex justify-content-center">
            <div className="title mb-2">COVID Disease Tracker by Country</div>
          </div>
          <div className="d-flex">
            <div className="ml-auto" id="info"></div>
          </div>
          <div className="w-100 h-50 mb-1">
            <Map></Map>
          </div>
          <div className="w-100 h-25 bg-light mb-1">
            <ChartCanvas></ChartCanvas>
          </div>
          <div className="d-flex flex-column">
            <Github></Github>
            <div id="location">Location: </div>
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
    </div>
  );
}

export default App;
