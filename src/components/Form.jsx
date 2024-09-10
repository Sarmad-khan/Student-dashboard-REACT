import React, { useState, useEffect } from "react";
import "../App.css";

const Form = ({ onFormSubmit, selectedStudent }) => {
  const [formData, setFormData] = useState({
    id: null, 
    name: "",
    email: "",
    username: "",
    phone: ""
  });

  useEffect(() => {
    if (selectedStudent) {
      setFormData(selectedStudent);
    }
  }, [selectedStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formData); 
    setFormData({
      id: null,
      name: "",
      email: "",
      username: "",
      phone: ""
    });
  };

  return (
    <div className="formItems">
      <form onSubmit={handleSubmit} className="submit">
        <input
          type="text"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          name="name"
        />
        <input
          type="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          type="text"
          value={formData.username}
          placeholder="Username"
          onChange={handleChange}
          name="username"
        />
        <input
          type="number"
          value={formData.phone}
          placeholder="Phone"
          onChange={handleChange}
          name="phone"
        />
        <button type="submit">{selectedStudent ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default Form;
