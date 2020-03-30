import React from "react";
import "./App.css";
import Map from "./Components/Map";

function App() {
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
                <div>Exp:1</div>
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
