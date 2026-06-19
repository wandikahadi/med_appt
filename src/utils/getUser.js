import { API_URL } from "../config";

export const getUser = async () => {
    const res = await fetch(`${API_URL}/api/auth/user`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "email": sessionStorage.getItem("email")
        }
    });

    const user = await res.json();

    sessionStorage.setItem("name", user.name);
    sessionStorage.setItem("email", user.email);
    sessionStorage.setItem("phone", user.phone);
    sessionStorage.setItem("role", user.role);

    return user;
};