import React, { useState } from 'react';
import { UserIcon } from '@heroicons/react/24/solid'
import '../css/style.css'
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from '@mui/material';
import indexPic1 from '../images/indexPic1.jpg';
import { Link } from 'react-router-dom'

function Report() {
    const [showPopup, setShowPopup] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    const submitButtonClick = () => {
        setShowPopup(true);
    };

    const updateButtonClick = () => {
        setShowUpdate(true);
    };

    const deleteButtonClick = () => {
        setShowDelete(true);
    };

    return (
        <div>
            <header>
                <div class="navbar">
                    <div class="logo">
                        <Link to="/">CMC<font color="white">Dumpster</font></Link>
                    </div>
                    <ul class="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/report">Report Form</Link></li>
                    </ul>
                    <Link to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                </div>
            </header>
            <div class="report">
                <h1 id='reportCaption'>REPORT INCIDENT</h1>
                <button class="link1" type="button" name="submit" id="submit" onClick={submitButtonClick}>
                    ADD
                </button>
                <button class="link1" type="button" name="update" id="update" onClick={updateButtonClick}>
                    UPDATE
                </button>
                <button class="link1" type="button" name="delete" id="delete" onClick={deleteButtonClick}>
                    DELETE
                </button>
                {/* <form action="#" name="reportForm" id="reportForm">
                <div class="reportSections">
                <div class="sectionOne">
                    <h1>REPORT INCIDENT</h1>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Incident Name"
                    />
                    <input
                    id="address"
                    type="text"
                    name="address"
                    placeholder="Address"
                    />
                    <input
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Description"
                    />
                    <br />
                    <input type="file" id="addImage" name="addImage"/>
                </div>
                <div class="sectionTwo">
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

                <div class="reportBtns">
                <button class="btnReport" type="submit" name="submit" id="submit">
                    ADD
                </button>
                <button class="btnReport" type="button" name="update" id="update" onClick={handleButtonClick}>
                    UPDATE
                </button>
                <button class="btnReport" type="button" name="delete" id="delete">
                    DELETE
                </button>
                </div>
            </form> */}
            </div>
            {showPopup && (
                <Popup>
                    <form className='popUpForm'>
                        <label className='popUpLabel' htmlFor="incidentName">Incident Name:</label>
                        <input className='popUpInput' type="text" id="incidentName" name="incidentName" placeholder='Enter Incident Name' required />

                        <label className='popUpLabel' htmlFor="address">Address:</label>
                        <input className='popUpInput' type="text" id="address" name="address" placeholder='Enter Address' required />

                        <label className='popUpLabel' htmlFor="description">Description:</label>
                        <textarea className='popUpInputDescription' id="description" name="description" placeholder='Enter Description' required></textarea>

                        <label className='popUpLabel' htmlFor="images">Upload Images:</label>
                        <input type="file" id="images" name="images" multiple />

                        <div className='btnReportContainer'>
                            <button id='addSubmit' className='btnReport' style={{ width: 300 }} type="submit">Submit</button>
                            <button id='addClose' className='btnReport' style={{ width: 300 }} onClick={() => setShowPopup(false)}>Close</button>
                        </div>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                            width="100%"
                            height="40%"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </form>
                </Popup>
            )}
            {showUpdate && (
                <Popup>
                    <div className='updatePopup'>
                        <p className='updateContent'>Search Incident</p>
                        <div className='updateSection'>
                            <div className='searchBar'>
                                <InputBase sx={{ ml: 2, flex: 1, fontSize: "1.5vw" }} placeholder="Search" />
                                <IconButton type="button" sx={{ p: 1}}>
                                    <SearchIcon sx={{ width: '2vw', height: '2vw' }} />
                                </IconButton>
                            </div>
                            <div className='btnUpdateContainer'>
                                <button id='updateBtn' className='btnReportUpdate' style={{ width: 120 }} type="button">Update</button>
                                <button id='updateClose' className='btnReportUpdate' style={{ width: 100 }} onClick={() => setShowUpdate(false)}>Close</button>
                            </div>
                        </div>

                        <div className='updateDetails'>
                            <p>Incident Name</p>
                            <p>Incident Address</p>
                            <div id='desInc'>
                                <p id='incD'>Incident Description</p>
                                <div id='incD-img'>
                                    <img src={indexPic1} />
                                    <input id='incD-input' type='file' />
                                </div>                                
                            </div>                            
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                                width="100%"
                                height="40%"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </Popup>
            )}
            {showDelete && (
                <Popup>
                    <div className='deletePopup'>
                        <p className='deleteContent'>Search Incident</p>
                        <div className='dltSearchBar'>
                            <InputBase sx={{ ml: 2, flex: 1, fontSize: "1.5vw" }} placeholder="Search" />
                            <IconButton type="button" sx={{ p: 1 }}>
                                <SearchIcon sx={{ width: '2vw', height: '2vw' }} />
                            </IconButton>
                        </div>
                        <div className='btnDeleteContainer'>
                            <button id='deleteBtn' className='btnReportDlt' style={{ width: 120 }} type="button">Delete</button>
                            <button id='deleteClose' className='btnReportDlt' style={{ width: 100 }} onClick={() => setShowDelete(false)}>Close</button>
                        </div>
                    </div>
                </Popup>
            )}
            <Footer />
        </div>
    );
}

export default Report;
