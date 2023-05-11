import React, { useState } from "react";
import "../css/style.css";
import { UserIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

function AddArticle() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.title === "") {
      alert("Title is required");
      document.querySelector('input[name="title"]').focus();
      return;
    }
    if (form.description === "") {
      alert("Description is required");
      document.querySelector('input[name="description"]').focus();
      return;
    }
    const payload = {
      title: form.title,
      body: form.description,
    };
    try {
      const res = await axios.post(
        "http://localhost:3000/api/admin/addArticle",
        payload,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWNlODZiYWJmMzA4OTVlMjQyMDQ2ZiIsImVtYWlsIjoidmlkd2FkZXNlcmFtMjAwMkBnbWFpbC5jb20iLCJpYXQiOjE2ODM4MTA2NTgsImV4cCI6MTY4Mzg5NzA1OH0.TCfWaaiJYQ0Hat1V3nSBpKg0YNV2uZyib74HgeX4q3s`,
          },
        }
      );
      console.log("Response:", res.data);
      alert("Article Added Successfully");

      // Clear the form
      setForm({
        title: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error adding article");
    }
  };

  return (
    <div className="body">
      <header>
        <div class="navbar">
          <div class="logo">
            <Link to="/">
              CMC<font color="white">Dumpster</font>
            </Link>
          </div>
          <ul class="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-user">Create User</Link>
            </li>
            <li>
              <Link to="/add-article">Add Article</Link>
            </li>
            <li>
              <Link to="/add-garbage-spot">Add Garbage Spot</Link>
            </li>
          </ul>

          <Link className="userprofile-largescreen" to="/user-profile">
            <UserIcon
              id="headerUserIcon"
              color="white"
              width="1.2rem"
              style={{ marginLeft: "10" }}
            />
          </Link>
          <div class="app__navbar-smallscreen">
            <Link className="userprofile-smallscreen" to="/user-profile">
              <UserIcon
                id="headerUserIcon"
                color="white"
                width="1.2rem"
                style={{ marginLeft: "10" }}
              />
            </Link>
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
                    <Link to="/create-user">Create User</Link>
                  </li>
                  <li>
                    <Link to="/add-article">Add Article</Link>
                  </li>
                  <li>
                    <Link to="/add-garbage-spot">Add Garbage Spot</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <div class="addArticle">
        <form
          action="#"
          name="addArticleForm"
          id="addArticleForm"
          onSubmit={handleSubmit}
        >
          <h1>ADD ARTICLE</h1>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            id="description"
            value={form.description}
            onChange={handleChange}
          />
          <button type="submit" name="addArticleBtn" id="addArticleBtn">
            ADD
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddArticle;
