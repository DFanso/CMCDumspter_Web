import React, { useState } from 'react';
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import MyGoogleMap from './garbageSpotMap';


import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

function AddGarbageSpot() {
    const [toggleMenu, setToggleMenu] = useState(false);


    const [form, setForm] = useState({
        name: '',
        address: '',
        description: '',
        file: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prevForm) => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (form.name === '') {
            alert('Name is required');
            document.querySelector('input[name="name"]').focus();
            return;
        }
        if (form.address === '') {
            alert('Address is required');
            document.querySelector('input[name="address"]').focus();
            return;
        }
        if (form.description === '') {
            alert('Description is required');
            document.querySelector('input[name="description"]').focus();
            return;
        }

        // Handle form submission
        console.log('Form submitted:', form);
        alert('Garbage Spot Added Successfully');

        // Clear the form
        setForm({
            name: '',
            address: '',
            description: '',
            file: ''
        });
    };

    return (
        <div>
            <header>
                <div class="navbar">
                    <div class="logo">
                        <Link to="/">CMC<font color="white">Dumpster</font></Link>
                    </div>
                    <ul class="links">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/create-user">Create User</Link></li>
                        <li><Link to="/add-article">Add Article</Link></li>
                        <li><Link to="/add-garbage-spot">Add Garbage Spot</Link></li>
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
                                    <li><Link to="/create-user">Create User</Link></li>
                                    <li><Link to="/add-article">Add Article</Link></li>
                                    <li><Link to="/add-garbage-spot">Add Garbage Spot</Link></li>
                                </ul>
                            </div>
                        )}

                    </div>


                </div>
            </header>
            <div class="spot">
                <form action="#" name="spotForm" id="spotForm" onSubmit={handleSubmit}>
                    <div class="spotSections">
                        <div class="sectionOne">
                            <h1>ADD GARBAGE SPOT</h1>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Incident Name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                id="address"
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={form.address}
                                onChange={handleChange}
                            />
                            <input
                                id="description"
                                type="text"
                                name="description"
                                placeholder="Description"
                                value={form.description}
                                onChange={handleChange}
                            />
                            <input type="file" id="addFile" name="file" value={form.file} onChange={handleChange} multiple />
                            <button class="addSpotBtn" type="submit" name="addSpotBtn" id="addSpotBtn">
                                ADD
                            </button>
                        </div>
                        <div class="sectionTwo">
                            < MyGoogleMap />
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddGarbageSpot