import React from 'react'
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

// Images
import indexPic1 from '../images/indexPic1.jpg';
import indexPic2 from '../images/indexPic2.jpg';
import indexPic4 from '../images/indexPic4.jpg';

function ViewIncidents() {
    return (
        <div className='body'>
            <header>
                <div class="navbar">
                    <div class="logo">
                        <Link to="/">CMC<font color="white">Dumpster</font></Link>
                    </div>
                    <ul class="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/view-incidents">View Incidents</Link></li>
                    </ul>
                    <Link to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                </div>
            </header>
            <div class="viewIncident">
                <div class="incidentSection">
                    <div class="incidentList">
                        <div class="one">
                            <div class="text">
                                <h2>Incident Name</h2>
                                <p>Address</p>
                                <Link className='link' to="/incident-details">View More</Link>
                            </div>
                            <div class="incidentImg">
                                <img src={indexPic1} alt="Image 1" />
                            </div>
                        </div>
                        <div class="one">
                            <div class="text">
                                <h2>Incident Name</h2>
                                <p>Address</p>
                                <Link className='link' to="/incident-details">View More</Link>
                            </div>
                            <div class="incidentImg">
                                <img src={indexPic2} alt="Image 1" />
                            </div>
                        </div>
                        <div class="one">
                            <div class="text">
                                <h2>Incident Name</h2>
                                <p>Address</p>
                                <Link className='link' to="/incident-details">View More</Link>
                            </div>
                            <div class="incidentImg">
                                <img src={indexPic1} alt="Image 1" />
                            </div>
                        </div>
                        <div class="one">
                            <div class="text">
                                <h2>Incident Name</h2>
                                <p>Address</p>
                                <Link className='link' to="/incident-details">View More</Link>
                            </div>
                            <div class="incidentImg">
                                <img src={indexPic4} alt="Image 1" />
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

export default ViewIncidents