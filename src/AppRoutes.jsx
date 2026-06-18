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

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<App />} />
                <Route path="home" element={<Home />} />
                <Route path="appointments" element={<Appointment />} />
                <Route path="blog" element={<HealthBlog title="Health Blog" />} />
                <Route path="reviews" element={<Reviews title="Reviews" />} />
                <Route path="signup" element={<Sign_Up title="Sign Up" />} />
                <Route path="login" element={<Login title="Login" />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/self-checkup" element={<SelfCheckup />} />
            </Route>
        </Routes>
    );
}