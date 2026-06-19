import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [date, setDate] = useState("");
    const [timeSlot, setTimeSlot] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            name,
            phoneNumber,
            date,
            timeSlot,
        });

        setName("");
        setPhoneNumber("");
        setDate("");
        setTimeSlot("");
    };

    return (
        <form onSubmit={handleFormSubmit} className="appointment-form">
            <div className="form-group">
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Phone Number:</label>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Date of Appointment:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label>Book Time Slot:</label>
                <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    required
                >
                    <option value="">Select a time slot</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="01:00 PM">01:00 PM</option>
                    <option value="03:00 PM">03:00 PM</option>
                </select>
            </div>

            <button type="submit">Book Now</button>
        </form>
    );
};

export default AppointmentForm;