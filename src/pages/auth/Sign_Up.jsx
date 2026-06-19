import React, { useState } from "react";
import "./Sign_Up.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Sign_Up = () => {
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [showerr, setShowerr] = useState("");
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();

        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                role,
                name,
                email,
                password,
                phone,
            }),
        });

        const json = await response.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("role", role);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                setShowerr(json.errors[0].msg);
            } else {
                setShowerr(json.error);
            }
        }
    };

    const resetForm = () => {
        setRole("");
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setShowerr("");
    };

    return (
        <div className="signup-page">
            <div className="signup-card">
                <h1>Sign Up</h1>

                <p className="login-text">
                    Already a member? <Link to="/login">Login</Link>
                </p>

                <form onSubmit={register}>
                    <div className="form-group">
                        <label>Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="form-control"
                            required
                        >
                            <option value="">Select role</option>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Name</label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone</label>
                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            type="tel"
                            className="form-control"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {showerr && <div className="err">{showerr}</div>}

                    <button type="submit" className="submit-btn">
                        Submit
                    </button>

                    <button type="button" onClick={resetForm} className="reset-btn">
                        Reset
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Sign_Up;