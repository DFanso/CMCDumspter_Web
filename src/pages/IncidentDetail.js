import { React, useState, useEffect } from "react";
import "../css/style.css";
import { UserIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import indexPic4 from "../images/indexPic4.jpg";
import { Link } from "react-router-dom";

const token = localStorage.getItem("jwt");
const tempIncidentID = localStorage.getItem("tempIncidentID");
function IncidentDetail() {
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/incident/${tempIncidentID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          // Handle error here
          console.error(data.error);
        } else {
          setIncident(data);
          console.log(data);
        }
      })
      .catch((err) => {
        // Handle error here
        console.error(err);
      });
  }, []);

  if (!incident) {
    return <div>Loading...</div>;
  }
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
          <Link to="/user-profile">
            <UserIcon
              id="headerUserIcon"
              color="white"
              width="1.2rem"
              style={{ marginLeft: "10" }}
            />
          </Link>
        </div>
      </header>
      <div class="viewIncidentDetails">
        <div class="incidentDetailSection">
          <div class="incidents">
            <div class="iSecOne">
              <p>{incident.name}</p>
              <p>{incident.address}</p>
            </div>
            <div class="iSecTwo">
              <div id="description">
                <p>{incident.description}</p>
              </div>
              <div id="incidentImg">
                <img src={incident.imagePath} alt="Incident Pic" />
              </div>
            </div>
            <div class="iSecThree">
              <div id="approveDiv">
                <button
                  class="buttonIncident"
                  type="button"
                  name="approve"
                  id="approve"
                >
                  Approve
                </button>
              </div>
              <div id="rejectDiv">
                <button
                  class="buttonIncident"
                  type="button"
                  name="reject"
                  id="reject"
                >
                  Reject
                </button>
              </div>
            </div>
            <div class="iSecFour">
              <div id="redFlagDiv">
                <button
                  class="buttonIncident"
                  type="button"
                  name="redFlag"
                  id="redFlag"
                >
                  Set Red Flag
                </button>
              </div>
              <div id="cleanupDiv">
                <button
                  class="buttonIncident"
                  type="button"
                  name="cleanup"
                  id="cleanup"
                >
                  Immediate Cleanup
                </button>
              </div>
            </div>
          </div>
          <div class="incidentMap"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default IncidentDetail;
