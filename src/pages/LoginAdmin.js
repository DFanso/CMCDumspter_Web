import React from 'react'
import '../css/style.css'
import Popup from '../components/Popup';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginAdmin() {
    const navigate = useNavigate();
    const [forgotPassword, setforgotPassword] = useState(false);
    const [verify, setVerify] = useState(false);

    const buttonClick = () => {
        setforgotPassword(true);
    };

    const verifyButtonClick = () => {
        setVerify(true);
    };

    const [form, setForm] = useState({
        role: 'admin',
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
            return;
        }
        if (form.password === '') {
            alert('Password is required');
            return;
        }
        if (form.password.length < 6) {
            alert('Password should be more than 6 characters');
            return;
        }
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\|=-]).{8,}$/;
        if (!regex.test(form.password)) {
            alert('Password is not valid');
            return;
        }

        // Handle form submission
        console.log('Form submitted:', form);
        alert('Admin Login Successful');

        // Navigate to the admin dashboard
        navigate('/admin-dashboard');
    };

    return (
        <div>            
            <div class="loginSection">
                <div class="login">
                    <form action="#" name="loginForm" id="loginForm" onSubmit={handleSubmit}>
                        <h1>LOGIN</h1>
                        {/* <select name="role" value={form.role} onChange={handleChange} style={{ width: '7vw', height: '3vw', borderRadius: '1vw', backgroundColor: '#694c40', color: 'white', padding: '0.5vw', margin: '1vw', fontSize: '1.2vw', appearance: 'button' }}>
                            <option id='btnAdmin' value="admin">Admin</option>
                            <option id='btnGCap' value="gcap">GCap</option>
                            <option id='btnGTF' value="gtf">GTF</option>
                        </select> */}
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
                            <Link to="#" onClick={buttonClick}>Forgot Password?</Link>
                            <p>
                                Don't have an account?<Link to="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {forgotPassword && (
                <Popup>
                    <div className='passwordReset'>
                        <p>Enter email to proceed</p>
                        <form action="#" name="resetPasswordForm" id="resetPasswordForm">
                            <input type="text" name="email" placeholder="Email" />
                            <div className='btnContainer'>
                                <button class="btnResetPassword" type="submit" name="resetBtn" id="resetBtn" onClick={verifyButtonClick}>ENTER</button>
                                <button id='closeBtn' class="btnResetPassword" onClick={() => forgotPassword(false)}>CLOSE</button>
                            </div>
                        </form>
                    </div>
                </Popup>
            )}
            {verify && (
                <Popup>
                    <div className='varifyClass'>
                        <p>Enter email to proceed</p>
                        <form action="#" name="verifyForm" id="verifyForm">
                            <input type="text" name="code" placeholder="Code" />
                            <div className='btnContainer'>
                                <button class="btnResetPassword" type="submit" name="resetBtn" id="resetBtn">ENTER</button>
                                <button id='closeBtn' class="btnResetPassword" onClick={() => forgotPassword(false)}>CLOSE</button>
                            </div>
                        </form>
                    </div>
                </Popup>
            )}
        </div>
    )
}

export default LoginAdmin