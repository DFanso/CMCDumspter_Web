import React from 'react'
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function CaptainDashboard() {
    return (
        <div className='body'>
            <header>
                <div class="navbar">
                    <div class="logo">
                        <Link to="/">CMC<font color="white">Dumpster</font></Link>
                    </div>
                    <ul class="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/view-incidents">View Incidents</Link></li>
                    </ul>
                    <Link to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                </div>
            </header>
            <div class="captainDashboard">
                <h1>GREEN CAPTAIN DASHBOARD</h1>
                <div class="link1">
                    <Link to="/view-incidents" id="link1">View Incidents</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CaptainDashboard