import { Fill, Stroke, Style, Text, Circle } from "ol/style";

var styleForCountry = new Style({
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

var styleForPoint = new Style({
  image: new Circle({
    radius: 10,
    fill: new Fill({ color: "rgba(255, 0, 0, 0.4)" }),
  }),
});

var styleForHighlight = new Style({
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

export { styleForCountry, styleForPoint, styleForHighlight };
