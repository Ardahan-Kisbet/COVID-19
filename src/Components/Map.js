import React, { useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

function SetMap() {
  new Map({
    target: "map",
    interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    layers: [
      new TileLayer({
        source: new OSM()
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
