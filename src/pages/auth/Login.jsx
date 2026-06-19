import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const Login = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (sessionStorage.getItem("auth-token")) {
            navigate("/");
        }
    }, [navigate]);

    const login = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API_URL}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const json = await res.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("email", email);

            navigate("/");
            window.location.reload();
        } else {
            if (json.errors) {
                json.errors.forEach((error) => alert(error.msg));
            } else {
                alert(json.error);
            }
        }
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");
    };

    return (
        <div className="login-page">
            <div className="login-card">
                <h1>Login</h1>

                <p className="signup-link-text">
                    Are you a new member?{" "}
                    <Link to="/signup">Sign Up Here</Link>
                </p>

                <form onSubmit={login}>
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

                    <button type="submit" className="login-btn">
                        Login
                    </button>

                    <button type="button" onClick={resetForm} className="reset-btn">
                        Reset
                    </button>

                    <p className="forgot-password">Forgot Password?</p>
                </form>
            </div>
        </div>
    );
};

export default Login;