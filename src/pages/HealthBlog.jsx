const healthTips = [
    {
        title: "Stay Hydrated",
        description:
            "Drink plenty of water throughout the day to keep your body hydrated and maintain optimal bodily functions. Water helps with digestion, circulation, temperature regulation, and more.",
    },
    {
        title: "Eat a Balanced Diet",
        description:
            "Consume a variety of nutrient-rich foods, including fruits, vegetables, whole grains, lean proteins, and healthy fats. A balanced diet provides essential nutrients and helps maintain overall health.",
    },
    {
        title: "Exercise Regularly",
        description:
            "Engage in regular physical activity to boost cardiovascular health, strengthen muscles, improve flexibility, manage weight, and enhance overall well-being.",
    },
    {
        title: "Get Adequate Sleep",
        description:
            "Prioritize quality sleep to rejuvenate your body and mind. Most adults require 7-9 hours of sleep per night.",
    },
    {
        title: "Manage Stress",
        description:
            "Practice relaxation techniques, meditation, deep breathing, or hobbies to help reduce stress and improve mental health.",
    },
];

export default function HealthBlog() {
    return (
        <main className="relative z-10 min-h-[calc(100vh-88px)] px-5 py-10">
            <h1 className="mb-8 text-center text-3xl font-bold text-black">
                Health Tips and Guidance
            </h1>

            <div className="mx-auto flex max-w-4xl flex-col gap-6">
                {healthTips.map((item, index) => (
                    <article
                        key={index}
                        className="rounded-md bg-slate-100 px-8 py-8 shadow-sm"
                    >
                        <h2 className="mb-4 text-xl font-bold text-black">{item.title}</h2>
                        <p className="leading-relaxed text-slate-700">
                            {item.description}
                        </p>
                    </article>
                ))}
            </div>
        </main>
    );
}