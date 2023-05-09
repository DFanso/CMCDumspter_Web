import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
function Article() {
  return (
    <div>
        <Header/>
        <div class="news">
            <div class="articleSection">
                <div class="article">
                <h1>Garbage Disposal</h1>
                <p>
                    Over the years, population growth and economic development have
                    resulted in an increasing number of anthropogenic activities on land
                    and an increase in pollution globally which has contributed to
                    degrading the environment and the related ecosystem services.
                    Land-based pollution originates from different sources, including
                    municipal, industrial and agricultural waste, wastewater and
                    nutrient run-off, and from power generation.
                </p>
                <p id="author">- CMC Admin</p>
                </div>
                <div class="article">
                <h1>Landfill Sites</h1>
                <p>
                    Researching and raising awareness about the negative effects of
                    uncontrolled waste dumps. We live in a time of rapid urbanization
                    and population growth. But this growth comes with challenges that
                    impact on humanity and the environment. Billions of tons of
                    municipal waste (and greenhouse gas) covers landfill sites, floods
                    our oceans and destroys the environment each year. This is a
                    challenge that government and all of society must work together to
                    address.
                </p>
                <p id="author">- CMC Admin</p>
                </div>
                <div class="article">
                <h1>Sewage Treatment</h1>
                <p>
                    Raising awareness about the dangers of raw sewage on the
                    groundwater, and promoting best practices in wastewater treatment.
                    This document shows how Kenya, being a third world country that is
                    an ASAL, with options that are much limited and more difficult due
                    to: lack of infrastructure, technical and institutional capacity,
                    and financing, can sustainably utilize wastewater, which represents
                    a widely available and valuable resource.
                </p>
                <p id="author">- CMC Admin</p>
                </div>
            </div>
            <div class="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Article