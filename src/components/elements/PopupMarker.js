import React from "react";
import {Marker as MarkerL, Popup} from "react-leaflet";
import PropTypes from "prop-types";

const PopupMarker = ({position, text}) => {
    return (
        <MarkerL position={position}>
            <Popup>{text}</Popup>
        </MarkerL>
    );
};

PopupMarker.prototype = {
    position: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired
}

export default PopupMarker;
