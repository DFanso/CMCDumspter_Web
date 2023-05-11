import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    GoogleMap,
    LoadScript,
    MarkerF,
    InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

const center = {
    lat: 37.7749,
    lng: -122.4194,
};

// Sample JSON data with coordinates and details
const coordinatesData = [
    {
        id: 1,
        lat: 37.7749,
        lng: -122.4194,
        title: "Marker 1",
        description: "This is Marker 1.",
        imageUrl:
            "https://cmcdumspter.s3.amazonaws.com/645be5eda986689fcfffa82f.jpg",
    },
    {
        id: 2,
        lat: 37.7849,
        lng: -122.4294,
        title: "Marker 2",
        description: "This is Marker 2.",
        imageUrl: "https://via.placeholder.com/150",
    },
    {
        id: 3,
        lat: 37.7949,
        lng: -122.4394,
        title: "Marker 3",
        description: "This is Marker 3.",
        imageUrl: "https://via.placeholder.com/150",
    },
];

class MyGoogleMap extends Component {
    state = {
        activeMarkerId: null,
    };

    handleMarkerClick = (id) => {
        this.setState({ activeMarkerId: id });
    };

    renderInfoWindow = (coordinate) => {
        return (
            <InfoWindow
                position={{ lat: coordinate.lat, lng: coordinate.lng }}
                onCloseClick={() => this.setState({ activeMarkerId: null })}
            >
                <div>
                    <h4>{coordinate.title}</h4>
                    <p>{coordinate.description}</p>
                    <img src={coordinate.imageUrl} alt={coordinate.title} width="150" />
                    <div>
                        <Link
                            to={{
                                pathname: `/edit/${coordinate.id}`,
                                state: { coordinate },
                            }}
                        >
                            <button>Edit</button>
                        </Link>
                    </div>
                </div>
            </InfoWindow>
        );
    };

    render() {
        const { activeMarkerId } = this.state;
        return (
            <LoadScript googleMapsApiKey={"AIzaSyCCnEOItVHsoOo4uG_iMJ3TDu97Aip1SjA"}>
                <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
                    {coordinatesData.map((coordinate) => (
                        <MarkerF
                            key={coordinate.id}
                            position={{ lat: coordinate.lat, lng: coordinate.lng }}
                            onClick={() => this.handleMarkerClick(coordinate.id)}
                        />
                    ))}
                    {activeMarkerId &&
                        this.renderInfoWindow(
                            coordinatesData.find((coord) => coord.id === activeMarkerId)
                        )}
                </GoogleMap>
            </LoadScript>
        );
    }
}

export default MyGoogleMap;
