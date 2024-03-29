import React, { useEffect } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom,
} from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Stroke, Style, Circle } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import CountryGeoJson from "../assets/countries.geojson";
import { getVectorContext } from "ol/render";
import { easeOut } from "ol/easing";
import { unByKey } from "ol/Observable";
import Overlay from "ol/Overlay";

import {
  styleForCountry,
  styleForPoint,
  styleForHighlight,
  styleForSelectedCountry,
  initRadius,
} from "./styles";

import { GetCountryStateData } from "../data";

// This should be defined out of SetMap function. Otherwise every time component renders, it will create mapObj again and a new map will be created too.
// So define it in here and handle null check before map creation.
var map = null;
var coordinates = [];
var countryLayerSource = new VectorSource({
  url: CountryGeoJson,
  format: new GeoJSON(),
});
var countryLayer = new VectorLayer({
  name: "country",
  source: countryLayerSource,
  style: function (feature) {
    styleForCountry.getText().setText(feature.get("name"));
    return styleForCountry;
  },
});
var dataSource = new VectorSource({});

var dataLayer = new VectorLayer({
  name: "data",
  source: dataSource,
  zIndex: 1, // this is important to reach out circles on country layer
});

var tileLayer = new TileLayer({
  source: new OSM(),
});

var tooltip = null;
var tooltipOverlay = null;

var duration = 3000;
function flash(feature) {
  var start = new Date().getTime();
  var listenerKey = tileLayer.on("postrender", animate);

  function animate(event) {
    var vectorContext = getVectorContext(event);
    var frameState = event.frameState;
    var flashGeom = feature.getGeometry().clone();
    var elapsed = frameState.time - start;
    var elapsedRatio = elapsed / duration;
    // radius will be 5 at start and 30 at end.
    // var radius = easeOut(elapsedRatio) * 25 + 5;
    var radius = easeOut(elapsedRatio) * 2 + 3;
    var opacity = easeOut(1 - elapsedRatio);

    var styleForFlash = new Style({
      image: new Circle({
        radius: radius,
        stroke: new Stroke({
          color: "rgba(255, 0, 0, " + opacity + ")",
          width: 0.25 + opacity,
        }),
      }),
    });

    vectorContext.setStyle(styleForFlash);
    vectorContext.drawGeometry(flashGeom);
    if (elapsed > duration) {
      unByKey(listenerKey);
      return;
    }
    // tell OpenLayers to continue postrender animation
    map.render();
  }
}

dataSource.on("addfeature", function (e) {
  flash(e.feature);
});

function SetMap() {
  if (map === null) {
    map = new Map({
      target: "map",
      layers: [tileLayer, countryLayer, dataLayer],
      view: new View({
        center: [0, 0],
        zoom: 0,
        maxZoom: 6,
      }),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
    });

    tooltip = document.getElementById("tooltip");
    tooltipOverlay = new Overlay({
      element: tooltip,
      offset: [10, 0],
      positioning: "bottom-left",
    });
    map.addOverlay(tooltipOverlay);
  }

  // Seperate Layer Definitions
  /////////////////////////////
  var featureOverlayCountry = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: function (feature) {
      styleForHighlight.getText().setText(feature.get("name"));
      return styleForHighlight;
    },
    zIndex: 0,
  });

  var featureOverlayData = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: function (feature) {
      return styleForPoint;
    },
    zIndex: 1,
  });

  var featureSelectedCountry = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: function (feature) {
      styleForSelectedCountry.getText().setText(feature.get("name"));
      return styleForSelectedCountry;
    },
    zIndex: 0,
  });
  /////////////////////////////

  var highlightCountry;
  var selectedCountry;
  var highlightData;
  var displayFeatureInfo = function (pixel) {
    var info = document.getElementById("info");

    map.forEachFeatureAtPixel(pixel, function (feature, layer) {
      if (layer) {
        // handle country layer and data layer seperately
        switch (layer.get("name")) {
          case "country":
            if (feature) {
              info.innerHTML = feature.getId() + ": " + feature.get("name");
            } else {
              info.innerHTML = "&nbsp;";
            }
            if (feature !== highlightCountry) {
              if (highlightCountry) {
                featureOverlayCountry
                  .getSource()
                  .removeFeature(highlightCountry);
              }
              if (feature) {
                featureOverlayCountry.getSource().addFeature(feature);
              }
              highlightCountry = feature;
            }
            break;
          case "data":
            if (feature !== highlightData) {
              if (highlightData) {
                featureOverlayData.getSource().removeFeature(highlightData);
              }
              if (feature) {
                featureOverlayData.getSource().addFeature(feature);
              }
              highlightData = feature;
            }

            break;
          default:
        }
      }
    });
  };

  // tooltip operations
  const displayTooltip = (evt) => {
    let circleExist = false;
    map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
      if (layer) {
        if (layer.get("name") === "data") {
          if (feature) {
            tooltip.style.display = "";
            tooltipOverlay.setPosition(evt.coordinate);

            let text = "";
            if (feature.get("stateName") != null) {
              text = `Total Disease (${feature.get(
                "stateName"
              )}): ${feature.get("totalCase")}`;
            } else {
              text = `Total Disease: ${feature.get("totalCase")}`;
            }
            tooltip.innerHTML = text;
            circleExist = true;
          }
        }
      }
    });

    if (!circleExist) {
      // then there is no circle in this coordinate close tooltip
      tooltip.style.display = "none";
    }
  };

  // display clicked country's chart
  const updateChart = (evt) => {
    map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
      if (layer) {
        if (layer.get("name") === "country") {
          if (feature) {
            let searchCountry = feature.get("name");
            // callback to update chart line according to selected country
            callback(searchCountry);
          }
        }
      }
    });
  };

  // paint selected country
  const selectCountry = (pixel) => {
    map.forEachFeatureAtPixel(pixel, function (feature, layer) {
      if (layer) {
        // handle country layer and data layer seperately
        switch (layer.get("name")) {
          case "country":
            if (feature !== selectedCountry) {
              if (selectedCountry) {
                featureSelectedCountry
                  .getSource()
                  .removeFeature(selectedCountry);
              }
              if (feature) {
                featureSelectedCountry.getSource().addFeature(feature);
              }
              selectedCountry = feature;
            }
            break;
          default:
        }
      }
    });
  };

  map.on("pointermove", function (evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on("click", function (evt) {
    displayFeatureInfo(evt.pixel);
    selectCountry(evt.pixel);
    displayTooltip(evt);

    // change chart
    updateChart(evt);
  });

  map.getView().on("change:resolution", function (evt) {
    let zoom = map.getView().getZoom();
    let newRadius = Math.pow(Math.abs(zoom - 2), 2) + initRadius;

    // Update only radius of point/circle features
    styleForPoint.getImage().setRadius(newRadius);

    dataLayer.getSource().forEachFeature(function (feature) {
      feature.setStyle(styleForPoint);
    });
  });
}

function SetDiseasedCountries() {
  // Change color of diseased countries
  // TODO
  // countryLayerSource.forEachFeature((feature) => {
  //   console.log(1);
  // });
}

function AddCoordinateFeatures(elem) {
  var geom = new Point(fromLonLat([elem.x, elem.y]));
  var feature = new Feature(geom);
  feature.setProperties(elem);
  feature.setStyle(styleForPoint);
  dataSource.addFeature(feature);
}

var callback;

function MapObject(props) {
  callback = props.SetCountryName;
  async function FetchData() {
    // Wait for response
    await GetCountryStateData()
      .then((res) => {
        coordinates = res;
      })
      .catch((err) => {
        console.log(err);
      });

    // now coordinates are ready - set map data
    SetDiseasedCountries();
    coordinates.forEach((elem) => {
      AddCoordinateFeatures(elem);
    });
  }

  // to run function only once give [] empty array as second parameter
  useEffect(() => {
    SetMap();
    FetchData();
  }, []);

  return (
    <div id="map" className="h-100">
      <div id="tooltip" className="customTooltip"></div>
    </div>
  );
}

export default MapObject;
