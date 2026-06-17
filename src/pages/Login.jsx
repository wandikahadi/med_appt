import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";

export default function Login() {
    return (
        <main className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-5 py-10">
            <div className="w-full max-w-md rounded-lg bg-slate-100 p-8 shadow-sm">
                <h1 className="text-center text-3xl font-bold text-black">Login</h1>

                <p className="mt-6 text-center text-lg">
                    Are you a new member?{" "}
                    <Link to="/signup" className="font-semibold text-blue-500">
                        Sign Up Here
                    </Link>
                </p>

                <form className="mt-8 space-y-8">
                    <TextInput label="Email" type="email" placeholder="Enter your email" />
                    <TextInput label="Password" type="password" placeholder="Enter your password" />

                    <div className="space-y-3 pt-6">
                        <button className="w-full rounded bg-blue-500 py-3 font-medium text-white hover:bg-blue-600">
                            Login
                        </button>

                        <button
                            type="reset"
                            className="w-full rounded bg-red-500 py-3 font-medium text-white hover:bg-red-600"
                        >
                            Reset
                        </button>
                    </div>

                    <p className="text-center text-slate-700">Forgot Password?</p>
                </form>
            </div>
        </main>
    );
}