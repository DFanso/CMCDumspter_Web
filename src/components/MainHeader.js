import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

function MainHeader() {
    const [toggleMenu, setToggleMenu] = useState(false);


    return (
        <header>
            <div class="navbar">
                <div class="logo">
                    <Link to="/">CMC<font color="white">Dumpster</font></Link>
                </div>
                <ul class="links" style={{ alignItems: 'right' }}>
                    <li><Link to="/article">Public</Link></li>
                    <li><Link to='/login-Staff'>Staff</Link></li>
                    <li><Link to="/login-GCap">GCaptain</Link></li>
                    <li><Link to="/login-Admin">Admin</Link></li>
                </ul>

                <div class="app__navbar-smallscreen">
                    <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                            <AiFillCloseCircle fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                            <ul class="smallscreen-links">
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
    )
}

export default MainHeader