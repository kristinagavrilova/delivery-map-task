import React from "react";
import {Polyline, Popup} from "react-leaflet";
import PropTypes from "prop-types";

const BluePolyline = ({ points }) => {
  return (
      <Polyline color={"blue"} opacity={0.7} weight={5} positions={points}>
        <Popup>Polygon</Popup>
      </Polyline>
  )
};

BluePolyline.prototype = {
    points: PropTypes.array.isRequired
}

export default BluePolyline;
