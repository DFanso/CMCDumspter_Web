import React, { useState } from "react";
import "../css/style.css";
import { useNavigate } from "react-router-dom";

function Verify() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    code: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.code === "") {
      alert("Verification Code is required");
      document.querySelector('input[name="code"]').focus();
      return;
    }

    // Handle form submission
    console.log("Code submitted:", form);

    // Save the code in local storage
    localStorage.setItem("resetCode", form.code);

    // Clear the form
    setForm({
      code: "",
    });

    // Navigate to the reset form
    navigate("/reset-Form");
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
            <h1>ENTER CODE</h1>
            <input
              type="text"
              name="code"
              id="code"
              placeholder="Enter verification code"
              value={form.code}
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

export default Verify;
