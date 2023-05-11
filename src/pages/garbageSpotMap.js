import React, { Component } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapAPIKey = process.env.REACT_APP_MAPAPIKEY;

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

    // Call the onCoordinatesChange prop function with the new coordinates
    this.props.onCoordinatesChange(latitude, longitude);
  };
  render() {
    const { markerPosition } = this.state;
    return (
      <LoadScript googleMapsApiKey={mapAPIKey}>
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
