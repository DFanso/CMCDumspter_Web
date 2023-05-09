import React from 'react'
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function CreateUser() {

    const [form, setForm] = useState({
        name: '',
        no: '',
        email: '',
        address: '',
        role: 'admin',
        username: '',
        password: '',
        confirmPassword: ''
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
        const textRegex = /^[a-zA-Z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const pwRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\|=-]).{8,}$/;

        // Perform validation on form data
        if (form.name === '') {
            alert('Name is required');
            return;
        }
        else if (!textRegex.test(form.name)) {
            alert('Name should contain letters');
            return;
        }
        if (form.no === '') {
            alert('Contact No is required');
            return;
        }
        else if (!(form.no.length === 10)) {
            alert('Contact No should be 10 digits');
            return;
        }    
        else if (isNaN(form.no)) {
            alert('Contact No should contain digits');
            return;
        }
        if (form.email === '') {
            alert('Email is required');
            return;
        }
        else if (!emailRegex.test(form.email)) {
            alert('Email is not valid');
            return;
        }
        if (form.address === '') {
            alert('Address is required');
            return;
        }
        if (form.username === '') {
            alert('Username is required');
            return;
        }
        if (form.password === '') {
            alert('Password is required');
            return;
        }
        else if (form.password.length < 6) {
            alert('Password should be more than 6 characters');
            return;
        }
        else if (!pwRegex.test(form.password)) {
            alert('Password is not valid');
            return;
        }
        if (form.confirmPassword === '') {
            alert('Confirm Password is required');
            return;
        }
        else if (form.password !== form.confirmPassword) {
            alert('Password does not match');
            return;
        }

        // Handle form submission
        console.log('Form submitted:', form);
        alert('Created User Successfully');
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
            <div class="createUser">
                <form action="#" name="createForm" id="createForm" onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
                    <input type="text" name="no" placeholder="Contact No" value={form.no} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                    <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
                    <select name='role' value={form.role} onChange={handleChange} style={{ width: '25vw', height: '3.5vw', borderRadius: '1vw', backgroundColor: 'rgba(181, 175, 175, 0.4)', color: 'white', padding: '0.5vw', margin: '1vw', fontSize: '1.2vw', appearance: 'button' }}>
                        <option value="admin" id='btnAdmin'>Admin</option>
                        <option value="gcap" id='btnGCap'>GCap</option>
                        <option value="gtf" id='btnGTF'>GTF</option>
                    </select>
                    <input type="text" name="username" placeholder="Username" value={form.username} onChange={handleChange} />
                    <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} />
                    <button class="btnCreateUser" type="submit" name="create" id="create">CREATE</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateUser