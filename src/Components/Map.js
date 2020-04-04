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
import { Fill, Stroke, Style, Text, Circle } from "ol/style";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import CountryGeoJson from "../assets/countries.geojson";
import { getVectorContext } from "ol/render";
import { easeOut } from "ol/easing";
import { unByKey } from "ol/Observable";

// This should be defined out of SetMap function. Otherwise every time component renders, it will create mapObj again and a new map will be created too.
// So define it in here and handle null check before map creation.
var map = null;

function SetMap() {
  var style = new Style({
    fill: new Fill({
      color: "rgba(255, 255, 255, 0.6)",
    }),
    stroke: new Stroke({
      color: "#319FD3",
      width: 1,
    }),
    text: new Text({
      font: "12px Calibri,sans-serif",
      fill: new Fill({
        color: "#000",
      }),
      stroke: new Stroke({
        color: "#fff",
        width: 3,
      }),
    }),
  });

  var countryLayerSource = new VectorSource({
    url: CountryGeoJson,
    format: new GeoJSON(),
  });

  var countryLayer = new VectorLayer({
    source: countryLayerSource,
    style: function (feature) {
      style.getText().setText(feature.get("name"));
      return style;
    },
  });

  var dataSource = new VectorSource({});

  var dataLayer = new VectorLayer({
    source: dataSource,
  });

  function addRandomFeature() {
    var x = Math.random() * 360 - 180;
    var y = Math.random() * 180 - 90;
    var geom = new Point(fromLonLat([x, y]));
    var feature = new Feature(geom);
    dataSource.addFeature(feature);
  }

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
      var radius = easeOut(elapsedRatio) * 25 + 5;
      var opacity = easeOut(1 - elapsedRatio);

      var style = new Style({
        image: new Circle({
          radius: radius,
          stroke: new Stroke({
            color: "rgba(255, 0, 0, " + opacity + ")",
            width: 0.25 + opacity,
          }),
        }),
      });

      vectorContext.setStyle(style);
      vectorContext.drawGeometry(flashGeom);
      if (elapsed > duration) {
        unByKey(listenerKey);
        return;
      }
      // tell OpenLayers to continue postrender animation
      map.render();
    }
  }

  window.setInterval(addRandomFeature, 1000);

  dataSource.on("addfeature", function (e) {
    flash(e.feature);
  });

  var tileLayer = new TileLayer({
    source: new OSM(),
  });

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
  }

  var highlightStyle = new Style({
    stroke: new Stroke({
      color: "green",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(255,255,0,0.1)",
    }),
    text: new Text({
      font: "12px Calibri,sans-serif",
      fill: new Fill({
        color: "green",
      }),
    }),
  });

  var featureOverlay = new VectorLayer({
    source: new VectorSource(),
    map: map,
    style: function (feature) {
      highlightStyle.getText().setText(feature.get("name"));
      return highlightStyle;
    },
  });

  var highlight;
  var displayFeatureInfo = function (pixel) {
    var feature = map.forEachFeatureAtPixel(pixel, function (feature) {
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

  map.on("pointermove", function (evt) {
    if (evt.dragging) {
      return;
    }
    var pixel = map.getEventPixel(evt.originalEvent);
    displayFeatureInfo(pixel);
  });

  map.on("click", function (evt) {
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
