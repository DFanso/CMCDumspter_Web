import React from 'react'
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function AddGarbageSpot() {

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

                    <Link to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
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
                            <input type="file" id="addFile" name="file" value={form.file} onChange={handleChange} />
                            <button class="addSpotBtn" type="submit" name="addSpotBtn" id="addSpotBtn">
                                ADD
                            </button>
                        </div>
                        <div class="sectionTwo">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                                width="100%"
                                height="45%"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddGarbageSpot