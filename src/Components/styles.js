import { Fill, Stroke, Style, Text, Circle } from "ol/style";

const initRadius = 3;

const styleForCountry = new Style({
  fill: new Fill({
    // color: "rgba(255, 255, 255, 0.25)",
    color: "rgba(255, 255, 255, 0.25)",
  }),
  stroke: new Stroke({
    // color: "#319FD3",
    color: "#319FD3",
    width: 1,
  }),
  text: new Text({
    font: "12px Calibri,sans-serif",
    fill: new Fill({
      color: "green",
    }),
  }),
});

const styleForPoint = new Style({
  image: new Circle({
    radius: initRadius,
    fill: new Fill({ color: "rgba(255, 0, 0, 0.4)" }),
  }),
});

const styleForHighlight = new Style({
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

const styleForDiseased = styleForCountry.clone();
styleForDiseased.setFill(
  new Fill({
    // color: "rgba(255, 255, 255, 0.25)",
    color: "rgba(0, 0, 0, 0.25)",
  })
);

export {
  styleForCountry,
  styleForPoint,
  styleForHighlight,
  styleForDiseased,
  initRadius,
};
