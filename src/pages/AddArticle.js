import React from 'react'
import '../css/style.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AddArticle() {
    return (
        <div>
            <Header />
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