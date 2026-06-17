import { Link } from "react-router-dom";

const services = [
    {
        title: "Instant Consultation",
        image:
            "https://img.freepik.com/free-vector/online-doctor-concept-illustration_114360-1831.jpg",
        path: "/consultation",
    },
    {
        title: "Book an Appointment",
        image:
            "https://img.freepik.com/free-vector/appointment-booking-concept-illustration_114360-2139.jpg",
        path: "/appointments",
    },
    {
        title: "Self Checkup",
        image:
            "https://img.freepik.com/free-vector/doctor-checking-patient-health_23-2148856559.jpg",
        path: "/self-checkup",
    },
    {
        title: "Health Tips and Guidance",
        image:
            "https://img.freepik.com/free-vector/online-prescription-system-abstract-concept-illustration_335657-3876.jpg",
        path: "/blog",
    },
];

export default function Home() {
    return (
        <main className="relative z-10 min-h-[calc(100vh-88px)] px-5 py-10">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-black">Best Services</h1>
                <p className="mt-5 text-lg text-slate-700">
                    Love yourself enough to live a healthy lifestyle.
                </p>
            </div>

            <section className="mx-auto mt-20 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {services.map((service) => (
                    <Link
                        to={service.path}
                        key={service.title}
                        className="flex min-h-[300px] flex-col items-center justify-between rounded-xl bg-white p-6 text-center shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-48 w-full object-contain"
                        />

                        <h2 className="mt-6 text-xl font-bold text-slate-900">
                            {service.title}
                        </h2>
                    </Link>
                ))}
            </section>
        </main>
    );
}