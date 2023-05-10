import React, { useState } from 'react';
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

function UserProfile() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div>
      <header>
        <div class="navbar">
          <div class="logo">
            <Link to="/">CMC<font color="white">Dumpster</font></Link>
          </div>
          <ul class="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/article">Public</Link></li>
            <li><Link to='/login-Staff'>Staff</Link></li>
            <li><Link to="/login-GCap">GCaptain</Link></li>
            <li><Link to="/login-Admin">Admin</Link></li>
          </ul>
          <Link className='userprofile-largescreen' to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
          <div class="app__navbar-smallscreen">
            <Link className='userprofile-smallscreen' to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
            <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <AiFillCloseCircle fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                <ul class="smallscreen-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/article">Public</Link></li>
                  <li><Link to='/login-Staff'>Staff</Link></li>
                  <li><Link to="/login-GCap">GCaptain</Link></li>
                  <li><Link to="/login-Admin">Admin</Link></li>
                </ul>
              </div>
            )}

          </div>
        </div>
      </header>
      <div class="userProfile">
        <form name="userProfileForm" id="userProfileForm">
          <h1>User Profile</h1>
          <p>Name</p>
          <p>Contact No</p>
          <p>Email</p>
          <p>Address</p>
          <p>Post</p>
          <p>Username</p>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default UserProfile