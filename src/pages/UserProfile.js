import React from 'react'
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function UserProfile() {
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
          <Link to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
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
        <Footer/>
    </div>
  )
}

export default UserProfile