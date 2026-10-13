import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/djangoapp/register/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      alert("Registration successful!");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Sign-up</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input className="form-control mb-3" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
        <input className="form-control mb-3" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
        <input className="form-control mb-3" type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button className="btn btn-primary" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
