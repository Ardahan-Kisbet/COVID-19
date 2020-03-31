import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./Components/Map";
import { getTotalRepoCount } from "./main.js";

function App() {
  const [totalRepo, setTotalRepo] = useState(0);
  useEffect(() => {
    getTotalRepoCount().then(response => setTotalRepo(response));
  }, []);

  return (
    <div>
      <div className="content">
        <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 h-100">
          <div className="d-flex flex-column w-100 h-100">
            <div>
              <div className="header-content d-flex justify-content-center">
                <div className="">Some Explanations - HEADER</div>
                <span> - </span>
                <div className="">Github Project Navigator Icon</div>
              </div>
              <div className="d-flex flex-column">
                <div>
                  Total count of COVID related repositories: {totalRepo}{" "}
                  <span className="small">created after 01.01.2020</span>
                </div>
                <div>Exp:2</div>
              </div>
            </div>
            <div className="w-100 h-50">
              <Map></Map>
            </div>
            <div className="d-flex flex-column flex-grow-1">
              <div>footer area (maybe for results)</div>
              <div id="location">Location: </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
