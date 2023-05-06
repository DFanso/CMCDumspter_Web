import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Login() {
    const initialValues = { username: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

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
                        {/* <div class="userOptions">
                    <button class="btn btnAdmin">Admin</button>
                    <button class="btn btnGCap">GCap</button>
                    <button class="btn btnGTF">GTF</button>
                </div> */}
                        <select style={{ width: 150, height: 40, borderRadius: '1rem', backgroundColor: '#694c40', color: 'white', padding: '0.5rem', margin: '1rem' }}>
                            <option id='btnAdmin'>Admin</option>
                            <option id='btnGCap'>GCap</option>
                            <option id='btnGTF'>GTF</option>
                        </select>
                        <div class="label">
                            <label for="username">Username:</label> <br />
                            <input type="text" name="username" id="username" placeholder="Enter username" value={formValues.username} onChange={handleChange} />
                        </div>
                        <p id='errorLogin'>{formErrors.username}</p>
                        <div class="label">
                            <label for="password">Password:</label> <br />
                            <input type="password" name="password" id="password" placeholder="Enter password" value={formValues.password} onChange={handleChange} />
                        </div>
                        <p id='errorLogin'>{formErrors.password}</p>
                        <button class="btnLogin" type="submit" name="login" id="login">LOGIN</button>
                        <div class="finalSection">
                            <Link to="#">Forgot Password?</Link>
                            <p>
                                Don't have an account?<Link to="/register">Register</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login