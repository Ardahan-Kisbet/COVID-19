import axios from "axios";

import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import {
  defaults as defaultInteractions,
  DragRotateAndZoom
} from "ol/interaction";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

axios.get("https://ipapi.co/json/").then(res => {
  document.getElementById("location").append(res.data.country_name);
});

// var mapObj;

// window.onload = () => {
//   mapObj = new Map({
//     target: "map",
//     layers: [
//       new TileLayer({
//         source: new OSM()
//       })
//     ],
//     view: new View({
//       center: [0, 0],
//       zoom: 2
//     }),
//     interactions: defaultInteractions().extend([new DragRotateAndZoom()])
//   });
// };

// window.onresize = function() {
//   console.log("map");
//   console.log(mapObj);
//   setTimeout(function() {
//     mapObj.updateSize();
//   }, 200);
// };
