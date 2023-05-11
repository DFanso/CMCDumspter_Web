import React, { useState } from "react";
import "../css/style.css";
import { UserIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import MyGoogleMap from "./googleMap";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

// Images
import indexPic1 from "../images/indexPic1.jpg";
import indexPic2 from "../images/indexPic2.jpg";
import indexPic4 from "../images/indexPic4.jpg";

function ViewIncidents() {
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
          <ul class="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view-incidents">View Incidents</Link>
            </li>
          </ul>
          <Link className="userprofile-largescreen" to="/user-profile">
            <UserIcon
              id="headerUserIcon"
              color="white"
              width="1.2rem"
              style={{ marginLeft: "10" }}
            />
          </Link>
          <div class="app__navbar-smallscreen">
            <Link className="userprofile-smallscreen" to="/user-profile">
              <UserIcon
                id="headerUserIcon"
                color="white"
                width="1.2rem"
                style={{ marginLeft: "10" }}
              />
            </Link>
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
                    <Link to="/view-incidents">View Incidents</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <div class="viewIncident">
        <div class="incidentSection">
          <div class="incidentList">
            <div class="one">
              <div class="text">
                <h2>Incident Name</h2>
                <p>Address</p>
                <Link className="link" to="/incident-details">
                  View More
                </Link>
              </div>
              <div class="incidentImg">
                <img src={indexPic1} alt="Image 1" />
              </div>
            </div>
            <div class="one">
              <div class="text">
                <h2>Incident Name</h2>
                <p>Address</p>
                <Link className="link" to="/incident-details">
                  View More
                </Link>
              </div>
              <div class="incidentImg">
                <img src={indexPic2} alt="Image 1" />
              </div>
            </div>
            <div class="one">
              <div class="text">
                <h2>Incident Name</h2>
                <p>Address</p>
                <Link className="link" to="/incident-details">
                  View More
                </Link>
              </div>
              <div class="incidentImg">
                <img src={indexPic1} alt="Image 1" />
              </div>
            </div>
            <div class="one">
              <div class="text">
                <h2>Incident Name</h2>
                <p>Address</p>
                <Link className="link" to="/incident-details">
                  View More
                </Link>
              </div>
              <div class="incidentImg">
                <img src={indexPic4} alt="Image 1" />
              </div>
            </div>
          </div>
          <div class="incidentMap">
            <MyGoogleMap />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ViewIncidents;
