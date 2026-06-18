import { useState } from "react";

const specialties = [
    "Dentist",
    "Gynecologist/obstetrician",
    "General Physician",
    "Dermatologist",
    "Cardiologist",
    "Neurologist",
];

export default function Appointment() {
    const [search, setSearch] = useState("");

    const filteredSpecialties = specialties.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="relative z-10 min-h-[calc(100vh-88px)] px-5 py-16">
            <section className="mx-auto flex max-w-2xl flex-col items-center text-center">
                <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
                    Find a doctor at your own ease
                </h1>

                <img
                    src="https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1831.jpg"
                    alt="Find Doctor"
                    className="mt-8 h-72 w-full object-contain"
                />

                <div className="mt-8 flex w-full max-w-xl border border-slate-500 bg-white">
                    <input
                        type="text"
                        placeholder="Search doctors by specialty"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-4 py-3 text-base outline-none"
                    />

                    <button className="border-l border-slate-500 px-4 text-3xl">
                        🔍
                    </button>
                </div>

                <div className="mt-6 w-full max-w-xl border border-slate-300 bg-white text-left">
                    {filteredSpecialties.map((specialty) => (
                        <button
                            key={specialty}
                            className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-5 text-left hover:bg-slate-50"
                        >
                            <div className="flex items-center gap-4">
                                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-lg">
                                    🔍
                                </span>
                                <span className="text-lg text-slate-700">{specialty}</span>
                            </div>

                            <span className="text-xs font-semibold text-slate-500">
                                SPECIALITY
                            </span>
                        </button>
                    ))}
                </div>
            </section>
        </main>
    );
}