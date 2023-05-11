import React, { useState } from 'react';
import '../css/style.css'
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

import MyGoogleMap from './allMarkers';
// import { GoogleMap } from 'google-maps-react-markers/dist/google-map';
// import { useRef, useState } from 'react';
// import { Marker } from 'google-maps-react';

function Map() {
  const [toggleMenu, setToggleMenu] = useState(false);
  // const mapRef = useRef(null)
  // const [mapReady, setMapReady] = useState(false)

  // const onGoogleApiLoaded = ({ map, maps }) => {
  //   mapRef.current = map
  //   setMapReady(true)
  // }

  // const onMarkerClick = (e, { markerId, lat, lng }) => {
  //   console.log('This is _>', markerId)
  //   mapRef.current.setCenter({ lat, lng })
  // }

  return (
    <div>
      <header>
        <div class="navbar">
          <div class="logo">
            <Link to="/">CMC<font color="white">Dumpster</font></Link>
          </div>
          <ul class="links" style={{ alignItems: 'right' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Incident Map</Link></li>
            <li><Link to="/article">News & Articles</Link></li>
          </ul>


          <div class="app__navbar-smallscreen">
            <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <AiFillCloseCircle fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                <ul class="smallscreen-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/map">Incident Map</Link></li>
                  <li><Link to="/article">News & Articles</Link></li>
                </ul>
              </div>
            )}
          </div>



        </div>
      </header>


      <div class="staffMap">
        <div class="mapSection">
          <MyGoogleMap />
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}

          {/* {mapReady && <div>Map is Ready. See for logs in developer console.</div>}
          <GoogleMap
            apiKey=""
            defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
            defaultZoom={5}
            options={mapOptions}
            mapMinHeight="100vh"
            onGoogleApiLoaded={onGoogleApiLoaded}
            onChange={(map) => console.log('Map moved', map)}
          >
            {coordinates.map(({ lat, lng, name }, index) => (
              <Marker key={index} lat={lat} lng={lng} markerId={name} onClick={onMarkerClick} />
            ))}
          </GoogleMap> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Map