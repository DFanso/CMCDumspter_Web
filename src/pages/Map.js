import React, { useState } from "react";
import "../css/style.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import MyGoogleMap from "./allMarkers";
// import { GoogleMap } from 'google-maps-react-markers/dist/google-map';
// import { useRef, useState } from 'react';
// import { Marker } from 'google-maps-react';

function Map() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="body">
      <header>
        <div class="navbar">
          <div class="logo">
            <Link to="/">
              CMC<font color="white">Dumpster</font>
            </Link>
          </div>
          <ul class="links" style={{ alignItems: "right" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Incident Map</Link>
            </li>
            <li>
              <Link to="/article">News & Articles</Link>
            </li>
          </ul>

          <div class="app__navbar-smallscreen">
            <GiHamburgerMenu
              color="#fff"
              fontsize={27}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <AiFillCloseCircle
                  fromSzie={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul class="smallscreen-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/map">Incident Map</Link>
                  </li>
                  <li>
                    <Link to="/article">News & Articles</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      <div class="staffMap">
        <div class="mapSection">
          <MyGoogleMap />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Map;
