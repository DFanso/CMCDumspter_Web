import React from 'react'
import '../css/style.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginStaff() {
    const navigate = useNavigate();
   
    const [form, setForm] = useState({
        role: 'staff',
        username: '',
        password: ''
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

        // Perform validation on form data
        if (form.username === '') {
            alert('Username is required');
            document.querySelector('input[name="username"]').focus();
            return;
        }
        const regEx = /^[a-zA-Z]+$/;
        if (!regEx.test(form.username)) {
            alert('Username should be letters');
            document.querySelector('input[name="username"]').focus();
            return;
        }
        if (form.password === '') {
            alert('Password is required');
            document.querySelector('input[name="password"]').focus();
            return;
        }
        if (form.password.length < 6) {
            alert('Password should be more than 6 characters');
            document.querySelector('input[name="password"]').focus();
            return;
        }
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\|=-]).{8,}$/;
        if (!regex.test(form.password)) {
            alert('Password is not valid');
            document.querySelector('input[name="password"]').focus();
            return;
        }

        // Handle form submission
        console.log('Form submitted:', form);
        alert('Staff Login Successful');

        // Clear the form
        setForm({
            role: 'staff',
            username: '',
            password: ''
        });

        // Navigate to the admin dashboard
        navigate('/staff-dashboard');
    };

    return (
        <div className='body'>
            <div class="loginSection">
                <div class="login">
                    <form action="#" name="loginForm" id="loginForm" onSubmit={handleSubmit}>
                        <h1>LOGIN</h1>                        
                        <div class="label" id='label1'>
                            <label for="username">Enter Username</label> <br />
                            <input type="text" name="username" id="username" placeholder="Enter username" value={form.username} onChange={handleChange} />
                        </div>
                        <div class="label">
                            <label for="password">Enter Password</label> <br />
                            <input type="password" name="password" id="password" placeholder="Enter password" value={form.password} onChange={handleChange} />
                        </div>
                        <button class="btnLogin" type="submit" name="login" id="login">LOGIN</button>
                        <div class="finalSection">
                            <Link to="/forgot-password">Forgot Password?</Link>
                            <p>
                                Don't have an account?<Link to="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    )
}

export default LoginStaff