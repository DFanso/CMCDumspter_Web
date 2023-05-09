import React from 'react'
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function AddArticle() {
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
            <div class="addArticle">
                <form action="#" name="addArticleForm" id="addArticleForm">
                    <h1>ADD ARTICLE</h1>
                    <input type="text" name="title" placeholder="Title" />
                    <input type="text" name="author" placeholder="Author" />
                    <input type="text" name="descrition" placeholder="Description" id="description" />
                    <input type="file" id="addFile" name="addFile" />
                    <button type="submit" name="addArticleBtn" id="addArticleBtn">ADD</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddArticle