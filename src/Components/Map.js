import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

function SetMap() {
  new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new XYZ({
          url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        })
      })
    ],
    view: new View({
      center: [0, 0],
      zoom: 2
    })
  });
}

function MapObject() {
  useEffect(SetMap, []);

  return <div id="map" className="h-100"></div>;
}

export default MapObject;
