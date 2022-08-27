import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import styles from './GoogleMaps.module.css'

const GoogleMaps = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: '' //API key
    })
    if (!isLoaded) return <div>Loading...</div>
    return ( <Map /> );
}
 
export default GoogleMaps;

// Enable billing https://console.cloud.google.com/projectselector2/google/maps-apis/api-list?_ga=2.39681760.2112726806.1661599665-878471145.1660357085


const Map = () => {
    const center = useMemo(() => ({ lat: 44, lng: -80}), [])
    return ( 
        <GoogleMap zoom={10} center={center} mapContainerClassName={styles.mapContainer}>
            <Marker position={center} />
        </GoogleMap>
    );
}
