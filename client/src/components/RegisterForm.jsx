import React, { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement registration logic and API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Full Name:{" "}
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default RegisterForm;
