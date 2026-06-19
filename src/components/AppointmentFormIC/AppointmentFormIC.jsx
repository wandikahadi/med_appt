import React, { useState } from "react";

const AppointmentFormIC = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const now = new Date();

    const date = now.toISOString().split("T")[0];

    const timeSlot = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });

    onSubmit({
      name,
      phoneNumber,
      date,
      timeSlot,
      appointmentType: "Instant Consultation",
    });

    setName("");
    setPhoneNumber("");
  };

  return (
    <form onSubmit={handleFormSubmit} className="appointment-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>

      <button type="submit">Book Now</button>
    </form>
  );
};

export default AppointmentFormIC;