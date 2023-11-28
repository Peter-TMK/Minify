import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
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

export default LoginForm;
