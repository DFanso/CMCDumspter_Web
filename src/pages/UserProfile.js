import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/style.css";
import { UserIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

function UserProfile() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("jwt");

        if (token) {
          const response = await axios.get(
            "http://localhost:3000/api/auth/profile",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          if (response.data) {
            setProfile(response.data);
          }
        }
      } catch (error) {
        console.error("Error occurred while fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="body" id="userBody">
      <header>{/* Header code */}</header>
      <div class="userProfile">
        <form name="userProfileForm" id="userProfileForm">
          <h1>User Profile</h1>
          {profile ? (
            <>
              <p>Name: {profile.name}</p>
              <p>Contact No: {profile.contactNumber}</p>
              <p>Email: {profile.email}</p>
              <p>Address: {profile.address}</p>
              <p>Post: {profile.role}</p>
              <p>Username: {profile.username}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default UserProfile;
