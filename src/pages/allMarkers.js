import React, { Component } from "react";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import axios from "axios";
const token = localStorage.getItem("jwt");
const mapAPIKey = process.env.REACT_APP_MAPAPIKEY;

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

class MyGoogleMap extends Component {
  state = {
    activeMarkerId: null,
    coordinatesData: [], // Define state variable for coordinatesData
  };

  // Fetch incidents when component mounts
  componentDidMount() {
    this.fetchIncidents();
  }

  fetchIncidents = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/incident/getAllIncidents",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      this.setState({ coordinatesData: res.data.incidents });
    } catch (err) {
      console.error(err);
    }
  };

  handleMarkerClick = (_id) => {
    this.setState({ activeMarkerId: _id });
  };

  renderInfoWindow = (coordinate) => {
    return (
      <InfoWindow
        position={{ lat: coordinate.lat, lng: coordinate.long }}
        onCloseClick={() => this.setState({ activeMarkerId: null })}
      >
        <div>
          <h4>{coordinate.name}</h4> {/* Adjusted to use 'name' property */}
          <p>{coordinate.description}</p>
          <img
            src={coordinate.imagePath}
            alt={coordinate.name}
            width="150"
          />{" "}
          {/* Adjusted to use 'imagePath' property */}
        </div>
      </InfoWindow>
    );
  };

  render() {
    const { activeMarkerId, coordinatesData } = this.state; // Get coordinatesData from state
    return (
      <LoadScript googleMapsApiKey={mapAPIKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {coordinatesData.map((coordinate) => (
            <MarkerF
              key={coordinate._id}
              position={{ lat: coordinate.lat, lng: coordinate.long }}
              onClick={() => this.handleMarkerClick(coordinate._id)}
            />
          ))}
          {activeMarkerId &&
            this.renderInfoWindow(
              coordinatesData.find((coord) => coord._id === activeMarkerId)
            )}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MyGoogleMap;
