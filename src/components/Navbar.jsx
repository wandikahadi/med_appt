import { Link } from "react-router-dom";
import ProfileForm from './ProfileForm';

export default function Navbar() {
    return (
        <nav className="relative z-10 flex items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
            <Link to="/" className="text-xl font-bold text-slate-800 sm:text-2xl">
                StayHealthy <span className="text-blue-500">♙</span>
            </Link>

            <div className="hidden items-center gap-8 text-sm text-slate-900 lg:flex">
                <Link to="/">Home</Link>
                <Link to="/appointments">Appointments</Link>
                <Link to="/blog">Health Blog</Link>
                <Link to="/reviews">Reviews</Link>
                <ProfileForm />
            </div>

            <div className="hidden items-center gap-3 sm:flex">
                <Link to="/signup" className="rounded-full border border-blue-500 px-6 py-2 text-sm">
                    Sign Up
                </Link>
                <Link to="/login" className="rounded-full border border-blue-500 px-6 py-2 text-sm">
                    Login
                </Link>
            </div>

            <button className="text-2xl lg:hidden">☰</button>
        </nav>
    );
}