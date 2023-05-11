import React from 'react'
import '../css/style.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ForgotPassword() {

    const navigate = useNavigate();   

    const [form, setForm] = useState({
        email: ''
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
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (form.email === '') {
            alert('Email is required');
            document.querySelector('input[name="email"]').focus();
            return;
        }
        else if (!emailRegex.test(form.email)) {
            alert('Email is not valid');
            document.querySelector('input[name="email"]').focus();
            return;
        }

        // Handle form submission
        console.log('Email submitted:', form);

        // Clear the form
        setForm({
            email: ''
        });
        
        // Navigate to Verify Code Form
        navigate('/verify');
    };

    return (
        <div className='body'>
            <div class="fPSection">
                <div class="forgotP">
                    <form action="#" name="forgotPasswordForm" id="forgotPasswordForm" onSubmit={handleSubmit}>
                        <h1>ENTER EMAIL</h1>
                        <input type="email" name="email" id="email" placeholder="Enter email here" value={form.email} onChange={handleChange} />
                        <div>
                            <button class="btnFP" type="submit" name="fPSubmit" id="fPSubmit">SUBMIT</button>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword