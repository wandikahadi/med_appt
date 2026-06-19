import { Routes, Route } from "react-router-dom";
import Appointment from "./pages/Appointment";
import Sign_Up from "./pages/auth/Sign_Up";
import Login from "./pages/auth/Login";
import HealthBlog from "./pages/HealthBlog";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import SelfCheckup from "./pages/SelfCheckup";
import InstantConsultation from './components/InstantConsultation';
import Notification from './components/Notification';
import Profile from "./pages/Profile";
import ProfileEdit from "./pages/ProfileEdit";
import Reports from "./pages/Reports";
import GiveReviews from "./pages/GiveReviews";

export default function App() {
    return (
        <Notification>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Sign_Up />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/edit" element={<ProfileEdit />} />
                <Route path="/appointments" element={<Appointment />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/blog" element={<HealthBlog />} />
                <Route path="/reviews" element={<GiveReviews />} />
                <Route path="/instant-consultation" element={<InstantConsultation />} />
                <Route path="/self-checkup" element={<SelfCheckup />} />
            </Routes>
        </Notification>
    );
}