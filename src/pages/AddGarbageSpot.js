import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AddGarbageSpot() {
    return (
        <div>
            <Header />
            <div class="spot">
                <form action="#" name="spotForm" id="spotForm">
                    <div class="spotSections">
                        <div class="sectionOne">
                            <h1>ADD GARBAGE SPOT</h1>
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
                            <input type="file" id="addFile" name="addFile" />
                            <button class="addSpotBtn" type="submit" name="addSpotBtn" id="addSpotBtn">
                                ADD
                            </button>
                        </div>
                        <div class="sectionTwo">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                                width="100%"
                                height="45%"
                                style={{border: 0}}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddGarbageSpot