import { useState } from "react";
import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const token = sessionStorage.getItem("auth-token");

    const logout = () => {
        sessionStorage.clear();
        window.location.href = "/login";
    };

    return (
        <nav className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
            <Link to="/home" className="text-xl font-bold text-slate-800 sm:text-2xl">
                StayHealthy <span className="text-blue-500">♙</span>
            </Link>

            <div className="hidden items-center gap-8 text-sm text-slate-900 lg:flex">
                <Link to="/home">Home</Link>
                <Link to="/appointments">Appointments</Link>
                <Link to="/blog">Health Blog</Link>
                <Link to="/reviews">Reviews</Link>
            </div>

            <div className="hidden items-center gap-3 sm:flex">
                {token ? (
                    <div className="relative">
                        <button
                            onClick={() => setOpen(!open)}
                            className="font-semibold text-slate-800"
                        >
                            Welcome, {name || email}
                        </button>

                        {open && (
                            <div className="absolute right-0 mt-3 w-48 rounded-md bg-white py-3 shadow-lg z-[999]">
                                <Link
                                    to="/profile"
                                    onClick={() => setOpen(false)}
                                    className="block px-5 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                >
                                    Your Profile
                                </Link>

                                <Link
                                    to="/reports"
                                    onClick={() => setOpen(false)}
                                    className="block px-5 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                >
                                    Your Reports
                                </Link>

                                <button
                                    onClick={logout}
                                    className="block w-full px-5 py-2 text-left text-sm text-slate-700 hover:bg-slate-100"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <Link to="/signup" className="rounded-full border border-blue-500 px-6 py-2 text-sm">
                            Sign Up
                        </Link>
                        <Link to="/login" className="rounded-full border border-blue-500 px-6 py-2 text-sm">
                            Login
                        </Link>
                    </>
                )}
            </div>

            <button className="text-2xl lg:hidden">☰</button>
        </nav>
    );
}