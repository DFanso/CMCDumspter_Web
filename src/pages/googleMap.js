import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  GoogleMap,
  LoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
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
    incidents: [], // new state for storing the incidents fetched from the server
  };

  componentDidMount() {
    // replace '/api/incidents' with your actual API endpoint
    axios
      .get("http://localhost:3000/api/incident/getAllIncidents", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        this.setState({ incidents: response.data.incidents });
      })
      .catch((error) => {
        console.error("Error fetching incidents", error);
      });
  }

  handleMarkerClick = (id) => {
    this.setState({ activeMarkerId: id });
    console.log(id);
    localStorage.setItem("tempIncidentID", id);
  };

  renderInfoWindow = (incident) => {
    return (
      <InfoWindow
        position={{ lat: incident.lat, lng: incident.long }}
        onCloseClick={() => this.setState({ activeMarkerId: null })}
      >
        <div>
          <h4>{incident.name}</h4>
          <p>{incident.description}</p>
          <img src={incident.imagePath} alt={incident.name} width="150" />
          <div>
            <Link to={{ pathname: `/incident-details`, state: { incident } }}>
              <button>Edit</button>
            </Link>
          </div>
        </div>
      </InfoWindow>
    );
  };

  render() {
    const { activeMarkerId, incidents } = this.state;
    return (
      <LoadScript googleMapsApiKey={mapAPIKey}>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          {incidents.map((incident) => (
            <MarkerF
              key={incident._id}
              position={{ lat: incident.lat, lng: incident.long }}
              onClick={() => this.handleMarkerClick(incident._id, incident)}
            />
          ))}
          {activeMarkerId &&
            this.renderInfoWindow(
              incidents.find((incident) => incident._id === activeMarkerId)
            )}
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default MyGoogleMap;
