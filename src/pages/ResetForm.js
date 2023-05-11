import React, { useState } from "react";
import "../css/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResetForm() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
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
    const pwRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\|=-]).{8,}$/;

    if (form.password === "") {
      alert("Password is required");
      document.querySelector('input[name="password"]').focus();
      return;
    } else if (form.password.length < 6) {
      alert("Password should be more than 6 characters");
      document.querySelector('input[name="password"]').focus();
      return;
    } else if (!pwRegex.test(form.password)) {
      alert("Password is not valid");
      document.querySelector('input[name="password"]').focus();
      return;
    }

    if (form.confirmPassword === "") {
      alert("Confirm Password is required");
      document.querySelector('input[name="confirmPassword"]').focus();
      return;
    } else if (form.password !== form.confirmPassword) {
      alert("Password does not match");
      document.querySelector('input[name="confirmPassword"]').focus();
      return;
    }

    // Prepare the payload for the API request
    const payload = {
      resetCode: localStorage.getItem("resetCode"),
      newPassword: form.password,
    };

    // Send a post request to the reset password endpoint
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/reset-password",
        payload
      );

      // If the request is successful, display success message
      if (response.data) {
        console.log("New password set:", form);
        alert("Password set successfully");

        // Clear the form
        setForm({
          password: "",
          confirmPassword: "",
        });

        // Navigate to Home
        navigate("/");
      }
    } catch (error) {
      console.error("Error occurred while setting new password:", error);
      alert("Failed to set new password. Please try again.");
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
            <h1>RESET PASSWORD</h1>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="New Password"
              value={form.password}
              onChange={handleChange}
            />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm New Password"
              value={form.confirmPassword}
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

export default ResetForm;
