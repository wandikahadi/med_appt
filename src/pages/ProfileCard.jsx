import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { API_URL } from "../config";

export default function EditProfile() {
    const navigate = useNavigate();

    const [email] = useState(sessionStorage.getItem("email") || "");
    const [name, setName] = useState(sessionStorage.getItem("name") || "");
    const [phone, setPhone] = useState(sessionStorage.getItem("phone") || "");

    const saveProfile = async (e) => {
        e.preventDefault();

        const res = await fetch(`${API_URL}/api/auth/user`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "email": email,
            },
            body: JSON.stringify({
                name,
                phone,
            }),
        });

        const json = await res.json();

        if (json.authtoken) {
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);

            alert("Profile updated successfully");
            navigate("/profile");
        } else {
            if (json.errors) {
                json.errors.forEach((error) => alert(error.msg));
            } else {
                alert(json.error || "Failed to update profile");
            }
        }
    };

    return (
        <>
            <div className="flex min-h-[80vh] items-center justify-center bg-white">
                <form
                    onSubmit={saveProfile}
                    className="w-[370px] bg-slate-100 p-6 shadow-sm"
                >
                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-bold">Email</label>
                        <input
                            type="email"
                            value={email}
                            disabled
                            className="w-full rounded border border-slate-300 bg-slate-100 px-3 py-2 text-sm text-slate-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="mb-1 block text-sm font-bold">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="mb-1 block text-sm font-bold">Phone</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full rounded border border-slate-300 px-3 py-2 text-sm"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full rounded bg-blue-500 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>
            </div>
        </>
    );
}