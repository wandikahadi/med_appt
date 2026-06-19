// Following code has been commented with appropriate comments for your reference.
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

// Function component Notification to display user notifications
const Notification = ({ children }) => {
    // State variables to manage user authentication, username, doctor data, and appointment data
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);

    // useEffect hook to perform side effects in the component
    useEffect(() => {
        // Retrieve stored username, doctor data, and appointment data from sessionStorage and localStorage
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointmentData = JSON.parse(localStorage.getItem(storedDoctorData?.name));

        // Set isLoggedIn state to true and update username if storedUsername exists
        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        // Set doctorData state if storedDoctorData exists
        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        // Set appointmentData state if storedAppointmentData exists
        if (storedAppointmentData) {
            setAppointmentData(storedAppointmentData);
        }
    }, []); // Empty dependency array ensures useEffect runs only once after initial render

    // Return JSX elements to display Navbar, children components, and appointment details if user is logged in
    return (
        <div>
            {/* Render Navbar component */}
            <Navbar ></Navbar>
            {/* Render children components */}
            <main className="relative z-0">
                {children}
            </main>
            {/* Display appointment details if user is logged in and appointmentData is available */}
            {isLoggedIn && appointmentData && (
                <div className="fixed bottom-6 right-6 z-[9999] w-[320px] rounded-md bg-blue-500 p-5 text-white shadow-lg">
                    <h3 className="mb-4 text-xl font-bold">Appointment Details</h3>

                    <p className="text-sm">
                        <strong>Doctor:</strong> {doctorData?.name}
                    </p>

                    <p className="text-sm">
                        <strong>Speciality:</strong> {doctorData?.speciality}
                    </p>

                    <p className="text-sm">
                        <strong>Name:</strong> {appointmentData?.name}
                    </p>

                    <p className="text-sm">
                        <strong>Phone Number:</strong> {appointmentData?.phoneNumber}
                    </p>

                    <p className="text-sm">
                        <strong>Date of Appointment:</strong> {appointmentData?.date}
                    </p>

                    <p className="text-sm">
                        <strong>Time Slot:</strong> {appointmentData?.time}
                    </p>
                </div>
            )}
        </div>
    );
};

// Export Notification component for use in other parts of the application
export default Notification;
