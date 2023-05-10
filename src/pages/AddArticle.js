import React, { useState } from 'react';
import '../css/style.css'
import { UserIcon } from '@heroicons/react/24/solid'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


import { GiHamburgerMenu } from 'react-icons/gi';
import { AiFillCloseCircle } from 'react-icons/ai';

function AddArticle() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const [form, setForm] = useState({
        title: '',
        author: '',
        description: '',
        file: ''
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
        if (form.title === '') {
            alert('Title is required');
            document.querySelector('input[name="title"]').focus();
            return;
        }
        if (form.author === '') {
            alert('Author is required');
            document.querySelector('input[name="author"]').focus();
            return;
        }
        if (form.description === '') {
            alert('Description is required');
            document.querySelector('input[name="description"]').focus();
            return;
        }

        // Handle form submission
        console.log('Form submitted:', form);
        alert('Article Added Successfully');

        // Clear the form
        setForm({
            title: '',
            author: '',
            description: '',
            file: ''
        });
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

                    <Link className='userprofile-largescreen' to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                    <div class="app__navbar-smallscreen">
                        <Link className='userprofile-smallscreen' to="/user-profile"><UserIcon id='headerUserIcon' color='white' width='1.2rem' style={{ marginLeft: '10' }} /></Link>
                        <GiHamburgerMenu color="#fff" fontsize={27} onClick={() => setToggleMenu(true)} />
                        {toggleMenu && (
                            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                                <AiFillCloseCircle fromSzie={27} className='overlay__close' onClick={() => setToggleMenu(false)} />
                                <ul class="smallscreen-links">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/create-user">Create User</Link></li>
                                    <li><Link to="/add-article">Add Article</Link></li>
                                    <li><Link to="/add-garbage-spot">Add Garbage Spot</Link></li>
                                </ul>
                            </div>
                        )}

                    </div>

                </div>
            </header>
            <div class="addArticle">
                <form action="#" name="addArticleForm" id="addArticleForm" onSubmit={handleSubmit}>
                    <h1>ADD ARTICLE</h1>
                    <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} />
                    <input type="text" name="author" placeholder="Author" value={form.author} onChange={handleChange} />
                    <input type="text" name="description" placeholder="Description" id="description" value={form.description} onChange={handleChange} />
                    <input type="file" id="addFile" name="file" value={form.file} onChange={handleChange} />
                    <button type="submit" name="addArticleBtn" id="addArticleBtn">ADD</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default AddArticle