import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div class="footer">
        <div class="col section1">
          <Link to="/">CMC<font color="white">Dumpster</font></Link>
          <p class="copyright">Copyright © 2023 CMCDumpster</p>
          <p>All Rights Reserved.</p>
        </div>
        <div class="col section2">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/map">Map</Link></li>
            <li><Link to="/article">News & Articles</Link></li>
            <li><Link to="/report">Report Form</Link></li>
            <li><Link to="/user-profile">User Profile</Link></li>
          </ul>
        </div>
        <div class="col section3">
          <p>No 55, Lake Road,</p>
          <p>Colombo</p>
          <p>Phone: 0115115115</p>
          <div class="socialLinks">
            <Link to="https://www.facebook.com/" class="fab fa-facebook"></Link>
            <Link to="https://www.instagram.com/" class="fab fa-instagram"></Link>
            <Link to="https://twitter.com/" class="fab fa-twitter"></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer