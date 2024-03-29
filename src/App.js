import React, { useState } from "react";
import "./App.scss";
// get map component
import Map from "./Components/Map";
// get chart component
import ChartCanvas from "./Components/Chart";
// get pie chart component
import PieChartCanvas from "./Components/PieChart";
// get country details component
import CountryDetails from "./Components/CountryDetails";
// get github component
import Github from "./Components/Github";
// import github icon
import { ReactComponent as GithubLogo } from "./assets/github-brands.svg";

function App() {
  const [countryName, setCountryName] = useState("Turkey");
  return (
    <div className="content">
      <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100">
        <div className="d-flex flex-column w-100 h-100">
          <div className="d-flex flex-column">
            <div className="title text-center">
              COVID Disease Tracker By Country
            </div>
            <div className="d-flex flex-row">
              <div className="badges">
                <span className="badge badge-warning">React.js</span>
                <span className="badge badge-info">OpenLayers</span>
                <span className="badge badge-success">Chart.js</span>
                <span className="badge badge-dark">Github API</span>
              </div>
              <div className="ml-auto" id="info"></div>
            </div>
          </div>
          <div className="mb-1" style={{ height: "400px" }}>
            <Map SetCountryName={setCountryName}></Map>
          </div>
          <div className="bg-light" style={{ height: "250px" }}>
            <ChartCanvas CountryName={countryName}></ChartCanvas>
          </div>
          <div className="mt-1 flexWrap bg-light">
            <div className="col-md-6 col-sm-12">
              <PieChartCanvas CountryName={countryName}></PieChartCanvas>
            </div>
            <div className="col-md-6 col-sm-12">
              <CountryDetails CountryName={countryName}></CountryDetails>
            </div>
            <div>
              <Github></Github>
            </div>
          </div>
          <div className="d-flex flex-column mt-auto">
            <div id="location">Location: </div>
            <hr
              className="w-100"
              style={{ border: "1px solid white", borderRadius: "5px" }}
            ></hr>
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
