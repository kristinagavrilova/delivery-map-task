import React from "react";
import {useMap} from "react-leaflet";
import PropTypes from "prop-types";

const AutoFitBound = ({bounds}) => {
    const map = useMap();
    React.useEffect(() => {
        if (!map || bounds.length === 0) return;
        map.fitBounds(bounds);
    }, [map, bounds]);
    return null;
};

AutoFitBound.prototype = {
    bounds: PropTypes.array.isRequired
}

export default AutoFitBound;

