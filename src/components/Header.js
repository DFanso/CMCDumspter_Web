import React from 'react'
import '../css/style.css'
import {UserIcon} from '@heroicons/react/24/solid'
import {Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div class="navbar">
          <div class="logo">
          <Link to="/">CMC<font color="white">Dumpster</font></Link>
          </div>
          <ul class="links">
          <li><Link to="/">Home</Link></li>
          <li><Link to='/report'>Report Form</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/article">News & Articles</Link></li>
          </ul>
          
          <Link to="/user-profile"><UserIcon color='white' width='1.2rem' style={{marginLeft:'10'}}/></Link>
      </div>
    </header>
  )
}

export default Header