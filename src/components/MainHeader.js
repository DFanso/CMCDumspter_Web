import React from 'react'
import { Link } from 'react-router-dom';

function MainHeader() {
    return (
        <header>
            <div class="navbar">
                <div class="logo">
                    <Link to="/">CMC<font color="white">Dumpster</font></Link>
                </div>
                <ul class="links" style={{alignItems: 'right'}}>
                    <li><Link to="/article">Public</Link></li>
                    <li><Link to='/login-Staff'>Staff</Link></li>
                    <li><Link to="/login-GCap">GCaptain</Link></li>
                    <li><Link to="/login-Admin">Admin</Link></li>                    
                </ul>                
            </div>
        </header>
    )
}

export default MainHeader