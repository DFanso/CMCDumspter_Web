import React from "react";
import "../css/style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginStaff() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "gtf",
    username: "",
    password: "",
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

    // Perform validation on form data
    if (form.username === "") {
      alert("Username is required");
      document.querySelector('input[name="username"]').focus();
      return;
    }
    const regEx = /^[a-zA-Z]+$/;
    if (!regEx.test(form.username)) {
      alert("Username should be letters");
      document.querySelector('input[name="username"]').focus();
      return;
    }
    if (form.password === "") {
      alert("Password is required");
      document.querySelector('input[name="password"]').focus();
      return;
    }
    if (form.password.length < 6) {
      alert("Password should be more than 6 characters");
      document.querySelector('input[name="password"]').focus();
      return;
    }
    const regex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\|=-]).{8,}$/;
    if (!regex.test(form.password)) {
      alert("Password is not valid");
      document.querySelector('input[name="password"]').focus();
      return;
    }

    // Send a post request to the login endpoint.
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        form
      );

      // If the request is successful, store the JWT token in local storage
      if (response.data && response.data.token) {
        localStorage.setItem("jwt", response.data.token);

        // Clear the form
        setForm({
          role: "gtf",
          username: "",
          password: "",
        });

        // Navigate to the staff dashboard
        navigate("/staff-dashboard");
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="body">
      <div class="loginSection">
        <div class="login">
          <form
            action="#"
            name="loginForm"
            id="loginForm"
            onSubmit={handleSubmit}
          >
            <h1>LOGIN</h1>
            <div class="label" id="label1">
              <label for="username">Enter Username</label> <br />
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter username"
                value={form.username}
                onChange={handleChange}
              />
            </div>
            <div class="label">
              <label for="password">Enter Password</label> <br />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            <button class="btnLogin" type="submit" name="login" id="login">
              LOGIN
            </button>
            <div class="finalSection">
              <Link to="/forgot-password">Forgot Password?</Link>
              <p>
                Don't have an account?<Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginStaff;
