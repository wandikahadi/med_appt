import { Link } from "react-router-dom";
import TextInput from "../components/TextInput";

export default function Sign_Up() {
  return (
    <main className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-5 py-10">
      <div className="w-full max-w-md rounded-lg bg-slate-100 p-8 shadow-sm">
        <h1 className="text-center text-3xl font-bold text-black">Sign Up</h1>

        <p className="mt-6 text-center text-lg">
          Already a member?{" "}
          <Link to="/login" className="font-semibold text-blue-500">
            Login
          </Link>
        </p>

        <form className="mt-5 space-y-5">
          <div>
            <label className="mb-2 block font-bold">Role</label>
            <select className="w-full rounded border border-slate-300 bg-white px-4 py-3 outline-none">
              <option>Select role</option>
              <option>Patient</option>
              <option>Doctor</option>
            </select>
          </div>

          <TextInput label="Name" type="text" placeholder="Enter your name" />
          <TextInput label="Phone" type="tel" placeholder="Enter your phone number" />
          <TextInput label="Email" type="email" placeholder="Enter your email" />
          <TextInput label="Password" type="password" placeholder="Enter your password" />

          <button className="w-full rounded bg-blue-500 py-3 font-medium text-white hover:bg-blue-600">
            Submit
          </button>

          <button
            type="reset"
            className="w-full rounded bg-red-500 py-3 font-medium text-white hover:bg-red-600"
          >
            Reset
          </button>
        </form>
      </div>
    </main>
  );
}