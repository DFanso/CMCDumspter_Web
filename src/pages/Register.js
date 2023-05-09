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
                    <select style={{ width: '25vw', height: '3.5vw', borderRadius: '1vw', backgroundColor: 'rgba(181, 175, 175, 0.4)', color: 'white', padding: '0.5vw', margin: '1vw', fontSize: '1.2vw', appearance: 'button' }}>
                        <option id='btnAdmin'>Admin</option>
                        <option id='btnGCap'>GCap</option>
                        <option id='btnGTF'>GTF</option>
                    </select>
                    <input type="text" name="username" placeholder="Username" />
                    <input type="text" name="password" placeholder="Password" />
                    <input type="text" name="password" placeholder="Confirm Password" />
                    <button class="btnRegister" type="submit" name="register" id="register">REGISTER</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Register