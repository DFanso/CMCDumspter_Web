import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function CreateUser() {
    return (
        <div>
            <Header />
            <div class="createUser">
                <form action="#" name="createForm" id="createForm">
                    <h1>Create Account</h1>
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
                    <button class="btnCreateUser" type="submit" name="create" id="create">CREATE</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default CreateUser