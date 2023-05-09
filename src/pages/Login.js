import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Popup from '../components/Popup';
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Login() {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [forgotPassword, setforgotPassword] = useState(false);
    const [verify, setVerify] = useState(false);

    const buttonClick = () => {
        setforgotPassword(true);
    };

    const verifyButtonClick = () => {
        setVerify(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    const validate = (values) => {
        const errors = {};
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters!"
        } else if (values.password.length > 8) {
            errors.password = "Password must be less than 8 characters!"
        }
        return errors;
    };

    return (
        <div>
            <Header />
            <div class="loginSection">
                <div class="login">
                    {Object.keys(formErrors).length === 0 && isSubmit ? (
                        <div className='msgSuccess'>Logged in Successfully</div>
                    ) : (<pre></pre>
                    )}
                    <form action="#" name="loginForm" id="loginForm" onSubmit={handleSubmit}>
                        <h1>LOGIN</h1>                       
                        <select style={{ width: '7vw', height: '3vw', borderRadius: '1vw', backgroundColor: '#694c40', color: 'white', padding: '0.5vw', margin: '1vw', fontSize: '1.2vw', appearance: 'button' }}>
                            <option id='btnAdmin'>Admin</option>
                            <option id='btnGCap'>GCap</option>
                            <option id='btnGTF'>GTF</option>
                        </select>
                        <div class="label">
                            <label for="username">Enter Username</label> <br />
                            <input type="text" name="username" id="username" placeholder="Enter username" value={formValues.username} onChange={handleChange} />
                        </div>
                        <p id='errorLogin'>{formErrors.username}</p>
                        <div class="label">
                            <label for="password">Enter Password</label> <br />
                            <input type="password" name="password" id="password" placeholder="Enter password" value={formValues.password} onChange={handleChange} />
                        </div>
                        <p id='errorLogin'>{formErrors.password}</p>
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
                    <div className='passwordReset'>
                        <p>Enter email to proceed</p>
                        {/* <form action="#" name="resetPasswordForm" id="resetPasswordForm">
                            <input type="text" name="email" placeholder="Email" />
                            <div className='btnContainer'>
                                <button class="btnResetPassword" type="submit" name="resetBtn" id="resetBtn">ENTER</button>
                                <button id='closeBtn' class="btnResetPassword" onClick={() => forgotPassword(false)}>CLOSE</button>
                            </div>
                        </form> */}
                    </div>
                </Popup>
            )}
            <Footer />
        </div>
    )
}

export default Login