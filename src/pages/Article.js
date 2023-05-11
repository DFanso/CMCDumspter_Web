import React, { useState, useEffect } from "react";
import "../css/style.css";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

function Article() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [articles, setArticles] = useState([]); // state to hold articles

  // Fetch articles when component mounts
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/article/fetchArticle",
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWM5OTRkMTIxOGE5MzYzODc5YmFiMSIsImVtYWlsIjoibGVvZ2F2aW4xMjNAb3V0bG9vay5jb20iLCJpYXQiOjE2ODM3OTA4MjQsImV4cCI6MTY4Mzg3NzIyNH0.GLCq4nQs3H7b1dUdtFAnfXxd7tyhMoFUYaEf0868CQ0`,
            },
          }
        );
        setArticles(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, []); // Dependency arra

  return (
    <div>
      <header>
        <div class="navbar">
          <div class="logo">
            <Link to="/">
              CMC<font color="white">Dumpster</font>
            </Link>
          </div>
          <ul class="links" style={{ alignItems: "right" }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/map">Incident Map</Link>
            </li>
            <li>
              <Link to="/article">News & Articles</Link>
            </li>
          </ul>

          <div class="app__navbar-smallscreen">
            <GiHamburgerMenu
              color="#fff"
              fontsize={27}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <AiFillCloseCircle
                  fromSzie={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul class="smallscreen-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/map">Incident Map</Link>
                  </li>
                  <li>
                    <Link to="/article">News & Articles</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <div class="news">
        <div class="articleSection">
          {articles.map((article) => (
            <div class="article" key={article._id}>
              <h1>{article.title}</h1>
              <p>{article.body}</p>
              <p id="author">- {article.author}</p>
            </div>
          ))}
        </div>
        {/* <div class="map">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.575840369662!2d80.03899797468854!3d6.821329093176445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2523b05555555%3A0x546c34cd99f6f488!2sNSBM%20Green%20University!5e0!3m2!1sen!2slk!4v1683098642267!5m2!1sen!2slk"
                width="600"
                height="450"
                style={{border:0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Article;
