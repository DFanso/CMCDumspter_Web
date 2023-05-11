import React, { useState } from "react";
import axios from "axios";
import "../css/style.css";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (form.email === "") {
      alert("Email is required");
      document.querySelector('input[name="email"]').focus();
      return;
    } else if (!emailRegex.test(form.email)) {
      alert("Email is not valid");
      document.querySelector('input[name="email"]').focus();
      return;
    }

    // Send a post request to the forgot password endpoint
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/forgot-password",
        form
      );

      // If the request is successful, navigate to the verify code form
      if (response.data) {
        console.log("Email submitted:", form);
        setForm({
          email: "",
        });
        window.alert("Email submission successful!");
        navigate("/verify");
      }
    } catch (error) {
      console.error("Error occurred while submitting email:", error);
      alert("Failed to submit email. Please try again.");
    }
  };

  return (
    <div className="body">
      <div class="fPSection">
        <div class="forgotP">
          <form
            action="#"
            name="forgotPasswordForm"
            id="forgotPasswordForm"
            onSubmit={handleSubmit}
          >
            <h1>ENTER EMAIL</h1>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email here"
              value={form.email}
              onChange={handleChange}
            />
            <div>
              <button class="btnFP" type="submit" name="fPSubmit" id="fPSubmit">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
