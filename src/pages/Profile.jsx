import { useNavigate } from "react-router-dom";

export default function Profile() {
    const name = sessionStorage.getItem("name");
    const email = sessionStorage.getItem("email");
    const phone = sessionStorage.getItem("phone");
    const navigate = useNavigate();

    return (
        <>
            <div className="flex min-h-[80vh] items-center justify-center bg-white">
                <div className="w-[360px] rounded-sm bg-slate-100 p-8 shadow-sm">
                    <h1 className="mb-5 text-3xl font-bold text-black">
                        Welcome, {name || "User"}
                    </h1>

                    <p className="mb-3 text-sm text-slate-800">
                        <span className="font-bold">Email:</span> {email}
                    </p>

                    <p className="mb-5 text-sm text-slate-800">
                        <span className="font-bold">Phone:</span> {phone || "-"}
                    </p>

                    <button
                        onClick={() => navigate("/profile/edit")}
                        className="w-full rounded bg-blue-500 py-2 text-sm font-medium text-white hover:bg-blue-600"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
}