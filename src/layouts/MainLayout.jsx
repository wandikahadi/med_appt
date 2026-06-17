import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
    return (
        <div className="min-h-screen w-full bg-white">
            <section className="relative min-h-screen w-full overflow-hidden">
                <div className="absolute left-[-80px] top-24 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl sm:left-24" />
                <div className="absolute right-[-80px] top-44 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl sm:right-24" />
                <Navbar />
                <Outlet />
            </section >
        </div >
    )
}
