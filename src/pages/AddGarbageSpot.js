import React, { useState } from "react";
import axios from "axios";
import "../css/style.css";
import { UserIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import MyGoogleMap from "./garbageSpotMap";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

function AddGarbageSpot() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
  const [form, setForm] = useState({
    name: "",
    address: "",
    description: "",
    file: null, // set to null initially
  });
  const handleCoordinatesChange = (lat, lng) => {
    setCoordinates({ lat, lng });
  };

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (files) {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: files[0],
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };
  let [image, setImage] = useState("");
  function handleImage(e) {
    console.log(e.target.files);

    setImage(e.target.files);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (form.name === "") {
      alert("Name is required");
      document.querySelector('input[name="name"]').focus();
      return;
    }
    if (form.address === "") {
      alert("Address is required");
      document.querySelector('input[name="address"]').focus();
      return;
    }
    if (form.description === "") {
      alert("Description is required");
      document.querySelector('input[name="description"]').focus();
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("address", form.address);
    formData.append("description", form.description);
    formData.append("lat", coordinates.lat);
    formData.append("long", coordinates.lng);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/incident/createIncident",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NWM5OTRkMTIxOGE5MzYzODc5YmFiMSIsImVtYWlsIjoibGVvZ2F2aW4xMjNAb3V0bG9vay5jb20iLCJpYXQiOjE2ODM3OTA4MjQsImV4cCI6MTY4Mzg3NzIyNH0.GLCq4nQs3H7b1dUdtFAnfXxd7tyhMoFUYaEf0868CQ0`,
          },
          body: formData,
        }
      );

      if (response.status === 201) {
        alert("Garbage Spot Added Successfully");
      } else {
        alert("An error occurred while adding the garbage spot.");
      }
    } catch (error) {
      alert("An error occurred while adding the garbage spot.");
    }

    setForm({ name: "", address: "", description: "", file: null });
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
      <div class="spot">
        <form action="#" name="spotForm" id="spotForm" onSubmit={handleSubmit}>
          <div class="spotSections">
            <div class="sectionOne">
              <h1>ADD GARBAGE SPOT</h1>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Incident Name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                id="address"
                type="text"
                name="address"
                placeholder="Address"
                value={form.address}
                onChange={handleChange}
              />
              <input
                id="description"
                type="text"
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
              />
              <input type="file" name="file" onChange={handleImage} />
              <button
                class="addSpotBtn"
                type="submit"
                name="addSpotBtn"
                id="addSpotBtn"
              >
                ADD
              </button>
            </div>
            <div class="sectionTwo">
              <MyGoogleMap onCoordinatesChange={handleCoordinatesChange} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddGarbageSpot;
