import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function AdminDashboard() {
  return (
    <div>
        <Header />
        <div class="adminDashboard">
            <h1>ADMIN DASHBOARD</h1>
            <div class="link1">
                <Link to="/create-user" id="link1">Create User Account</Link>
            </div>
            <div class="link1">
                <Link to="/add-article" id="link2">Add Article</Link>
            </div>
            <div class="link1">
                <Link to="/add-garbage-spot" id="link3">Add Garbage Spot</Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AdminDashboard