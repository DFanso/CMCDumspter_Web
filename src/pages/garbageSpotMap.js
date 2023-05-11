import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: -3.745,
    lng: -38.523,
};

class MyGoogleMap extends Component {
    state = {
        markerPosition: null,
    };

    handleClickedMap = (e) => {
        let latitude = e.latLng.lat();
        let longitude = e.latLng.lng();
        console.log(latitude, longitude);
        this.setState({ markerPosition: { lat: latitude, lng: longitude } });
    };

    render() {
        const { markerPosition } = this.state;
        return (
            <LoadScript googleMapsApiKey={"AIzaSyCCnEOItVHsoOo4uG_iMJ3TDu97Aip1SjA"}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                    onClick={this.handleClickedMap}
                >
                    {markerPosition && <Marker position={markerPosition} />}
                </GoogleMap>
            </LoadScript>
        );
    }
}

export default MyGoogleMap;
