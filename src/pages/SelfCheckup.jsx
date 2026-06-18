import { useState } from "react";

const heroText =
    "Self-health checkup is an essential practice that empowers individuals to take charge of their well-being. By routinely evaluating various aspects of their physical and mental health, people can identify potential issues early on and make informed decisions about seeking professional medical advice. A comprehensive self-health checkup may involve monitoring vital signs like blood pressure, heart rate, and body temperature, as well as assessing factors such as weight, diet, exercise, and sleep patterns. Additionally, being attuned to one's emotional state, stress levels, and overall mood can help detect signs of mental health concerns. Engaging in a regular self-health checkup not only promotes a proactive approach to personal healthcare but also fosters a greater understanding of one's body, leading to a more balanced and healthier lifestyle.";

export default function SelfCheckup() {
    const [showMore, setShowMore] = useState(false);

    return (
        <main className="relative z-10 min-h-[calc(100vh-88px)] px-6 py-20">
            <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 rounded-md bg-blue-600 px-8 py-8 text-white lg:flex-row">
                <img
                    src="https://img.freepik.com/free-vector/doctor-checking-patient-health_23-2148856559.jpg"
                    alt="Self Health Checkup"
                    className="h-56 w-full rounded-md object-contain lg:w-80"
                />

                <p className="max-w-3xl text-lg font-medium leading-relaxed">
                    {heroText}
                </p>
            </section>

            <section className="mt-10 max-w-3xl rounded-md bg-slate-100 p-6 shadow-md">
                <div className="text-6xl">🌡️</div>

                <h2 className="mt-4 text-2xl font-bold text-black">
                    Check Your Temperature
                </h2>

                <p className="mt-2 text-lg leading-relaxed text-slate-700">
                    Checking your temperature can help you monitor your health and detect
                    fever or other potential illnesses. It's essential to use an accurate
                    thermometer and follow the proper procedure for measuring body
                    temperature.
                    {showMore && (
                        <>
                            {" "}
                            Record your temperature at the same time each day when needed, and
                            seek medical advice if your fever is high, persistent, or followed
                            by symptoms such as chest pain, difficulty breathing, or severe
                            weakness.
                        </>
                    )}
                </p>

                <button
                    onClick={() => setShowMore(!showMore)}
                    className="mt-5 rounded bg-sky-500 px-8 py-3 text-lg font-medium text-white hover:bg-sky-600"
                >
                    {showMore ? "Read Less" : "Read More"}
                </button>
            </section>
        </main>
    );
}