import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Register() {
    return (
        <div>
            <Header />
            <div class="register">
                <form action="#" name="registerForm" id="registerForm">
                    <h1>REGISTER</h1>
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="no" placeholder="Contact No" />
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="address" placeholder="Address" />
                    <input type="text" name="post" placeholder="Post" />
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="password" placeholder="Password" />
                    <button class="btnRegister" type="submit" name="register" id="register">REGISTER</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Register