import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Fill, Stroke, Style, Text } from "ol/style";
import CountryGeoJson from "../assets/countries.geojson";

// This should be defined out of SetMap function. Otherwise every render it will create mapObj again and a new map will be created too.
// So define it in here and handle null check before map creation.
var map = null;

function SetMap() {
  var style = new Style({
    fill: new Fill({
      color: "rgba(255, 255, 255, 0.6)"
    }),
    stroke: new Stroke({
      color: "#319FD3",
      width: 1
    }),
    text: new Text({
      font: "12px Calibri,sans-serif",
      fill: new Fill({
        color: "#000"
      }),
      stroke: new Stroke({
        color: "#fff",
        width: 3
      })
    })
  });

  var vectorLayer = new VectorLayer({
    source: new VectorSource({
      url: CountryGeoJson,
      format: new GeoJSON()
    }),
    style: function(feature) {
      style.getText().setText(feature.get("name"));
      return style;
    }
  });

  if (map === null) {
    map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM()
        }),
        vectorLayer
      ],
      view: new View({
        center: [0, 0],
        zoom: 2
      }),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()])
    });
  }

  var highlightStyle = new Style({
    stroke: new Stroke({
      color: "#f00",
      width: 1
    }),
    fill: new Fill({
      color: "rgba(255,0,0,0.1)"
    }),
    text: new Text({
      font: "12px Calibri,sans-serif",
      fill: new Fill({
        color: "#000"
      }),
      stroke: new Stroke({
        color: "#f00",
        width: 3
      })
    })
  });

  var featureOverlay = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: function(feature) {
      highlightStyle.getText().setText(feature.get("name"));
      return highlightStyle;
    }
  });

  var highlight;
  var displayFeatureInfo = function(pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function(feature) {
      return feature;
    });

    var info = document.getElementById("info");
    if (feature) {
      info.innerHTML = feature.getId() + ": " + feature.get("name");
    } else {
      info.innerHTML = "&nbsp;";
    }

    if (feature !== highlight) {
      if (highlight) {
        featureOverlay.getSource().removeFeature(highlight);
      }
      if (feature) {
        featureOverlay.getSource().addFeature(feature);
      }
      highlight = feature;
    }
  };

  map.on("pointermove", function(evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on("click", function(evt) {
    displayFeatureInfo(evt.pixel);
  });
}

function MapObject() {
  // to run function only once give [] as second parameter
  //   useEffect(SetMap, []);
  useEffect(SetMap);

  return <div id="map" className="h-100"></div>;
}

export default MapObject;
