import {MapContainer, TileLayer} from 'react-leaflet'
import '../../style/style-map.css';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import PopupMarker from "../elements/PopupMarker";
import AutoFitBound from "../elements/AutoFitBound";
import BluePolyline from "../elements/BluePolyline";

function Map() {

    const [points, setPoints] = useState([]);
    const [startMarker, setStartMarker] = useState(null);
    const [destinationMarker, setDestinationMarker] = useState(null);
    const [bounds, setBounds] = useState([]);

    const route = useSelector((state) => state.main.route)

    useEffect(() => {
        if (route) {
            const coordinatesArray = route.routes[0].geometry.coordinates.map((arr) => [
                arr[1],
                arr[0],
            ]);
            setPoints(coordinatesArray);
            const startPoint = {lat: coordinatesArray[0][0], lng: coordinatesArray[0][1]};
            const destinationPoint = {
                lat: coordinatesArray[coordinatesArray.length - 1][0],
                lng: coordinatesArray[coordinatesArray.length - 1][1],
            };
            setStartMarker(startPoint);
            setDestinationMarker(destinationPoint);
            const newBounds = [startPoint, destinationPoint].map((m) => [
                m.lat,
                m.lng,
            ]);
            setBounds(newBounds);
        }
    }, [route]);

    const handleSetBounds = (b) => {
        setBounds(b);
    };

    return (
        <MapContainer className='map-container' scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <BluePolyline points={points}/>

            {startMarker && <PopupMarker position={startMarker} text="Start"/>}
            {destinationMarker && <PopupMarker position={destinationMarker} text="Destination"/>}

            <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds}/>
        </MapContainer>
    );
}

export default Map;
