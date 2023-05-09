import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function CaptainDashboard() {
    return (
        <div>
            <Header />
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