import { Routes, Route } from "react-router-dom";
import App from "./App";
import Appointment from "./pages/Appointment";
import Reviews from "./pages/Reviews";
import Sign_Up from "./pages/auth/Sign_Up";
import Login from "./pages/auth/Login";
import HealthBlog from "./pages/HealthBlog";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import SelfCheckup from "./pages/SelfCheckup";
import InstantConsultation from './components/InstantConsultation';
import Notification from './components/Notification';

export default function AppRoutes() {
    return (
        <Notification>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign_Up />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/blog" element={<HealthBlog />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/self-checkup" element={<SelfCheckup />} />
            </Routes>
        </Notification>
    );
}