import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function UserProfile() {
  return (
    <div>
        <Header/>
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