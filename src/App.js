import "./App.css";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const { firstName, lastName, email } = formData;

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    // You can perform further actions with the form data here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Basic validation for the first name input
    if (name === "firstName" && value.length < 2) {
      alert("Please enter a name with at least 2 letters");
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {/* Example displaying the first name */}
      <p>{firstName}</p>
    </div>
  );
}

export default App;
