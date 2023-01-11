import {GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import { useMemo } from 'react';
function MapBanner() {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API
    });
    const center = useMemo(() => ({lat: 11.598847895393314, lng: 104.88625496886345}), []);
    const options = {
        mapTypeControlOptions: {
            style: window.google?.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: window.google?.maps.ControlPosition.TOP_CENTER
        },
        zoomControlOptions: {
            position: window.google?.maps.ControlPosition.LEFT_CENTER
        },
        streetViewControlOptions: {
            position: window.google?.maps.ControlPosition.LEFT_TOP
        }
    }
    return (
            isLoaded && (
                <GoogleMap zoom={12} center={center} options={options} mapContainerClassName="w-full h-full">
                <Marker position={center}/>
            </GoogleMap>
            )
    );
}
export default MapBanner;
