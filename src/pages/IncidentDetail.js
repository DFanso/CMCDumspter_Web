import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import indexPic4 from '../images/indexPic4.jpg';

function IncidentDetail() {
    return (
        <div>
            <Header />
            <div class="viewIncidentDetails">
                <div class="incidentDetailSection">
                    <div class="incidents">
                        <div class="iSecOne">
                            <p>Incident Name</p>
                            <p>Address</p>
                        </div>
                        <div class="iSecTwo">
                            <div id="description">
                                <p>Description</p>
                            </div>
                            <div id="incidentImg">
                                <img src={indexPic4} alt="Incident Pic" />
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
                    <div class="incidentMap">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                            width="600"
                            height="450"
                            style={{border: 0}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IncidentDetail