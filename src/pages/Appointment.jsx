import { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard/DoctorCard";

const specialties = [
    "Dentist",
    "Gynecologist/obstetrician",
    "General Physician",
    "Dermatologist",
    "Ear-nose-throat (ent) Specialist",
    "Homeopath",
    "Ayurveda",
];

export default function Appointment() {
    const [search, setSearch] = useState("");
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    useEffect(() => {
        fetch("https://api.npoint.io/9a5543d36f1460da2f63")
            .then((res) => res.json())
            .then((data) => setDoctors(data))
            .catch((err) => console.log(err));
    }, []);

    const handleSelectSpecialty = (specialty) => {
        setSearch(specialty);

        const filtered = doctors.filter(
            (doctor) =>
                doctor.speciality.toLowerCase() === specialty.toLowerCase()
        );

        setFilteredDoctors(filtered);
        setIsSearched(true);
    };

    const filteredSpecialties = specialties.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <main className="relative z-10 min-h-[calc(100vh-88px)] px-5 py-16">
            <section className="mx-auto flex max-w-5xl flex-col items-center text-center">
                {!isSearched && (
                    <>
                        <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">
                            Find a doctor at your own ease
                        </h1>

                        <img
                            src="https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1831.jpg"
                            alt="Find Doctor"
                            className="mt-8 h-72 w-full object-contain"
                        />
                    </>
                )}

                <div className="mt-8 flex w-full max-w-xl border border-slate-500 bg-white">
                    <input
                        type="text"
                        placeholder="Search doctors by specialty"
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setIsSearched(false);
                        }}
                        className="w-full px-4 py-3 text-base outline-none"
                    />

                    <button className="border-l border-slate-500 px-4 text-3xl">
                        🔍
                    </button>
                </div>

                {!isSearched && search && (
                    <div className="mt-6 w-full max-w-xl border border-slate-300 bg-white text-left">
                        {filteredSpecialties.map((specialty) => (
                            <button
                                key={specialty}
                                onClick={() => handleSelectSpecialty(specialty)}
                                className="flex w-full items-center justify-between border-b border-slate-200 px-5 py-5 text-left text-black hover:bg-slate-50"
                            >
                                <span>{specialty}</span>
                                <span className="text-xs font-semibold text-slate-500">
                                    SPECIALITY
                                </span>
                            </button>
                        ))}
                    </div>
                )}

                {isSearched && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-bold">
                            {filteredDoctors.length} doctors available in {search}
                        </h2>

                        <h3 className="mt-3 text-lg font-semibold">
                            Book appointments with minimum wait-time & verified doctor details
                        </h3>

                        <div className="mt-6 flex flex-wrap justify-center gap-5">
                            {filteredDoctors.length > 0 ? (
                                filteredDoctors.map((doctor) => (
                                    <DoctorCard {...doctor} key={doctor.name} />
                                ))
                            ) : (
                                <p>No doctors found.</p>
                            )}
                        </div>
                    </div>
                )}
            </section>
        </main>
    );
}