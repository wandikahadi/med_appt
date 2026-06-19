import { useState } from "react";
import ReviewModal from "../components/ReviewModal";

const initialReviews = [
  {
    id: 1,
    doctorName: "Dr. John Doe",
    specialty: "Cardiology",
    review: "Excellent consultation",
  },
  {
    id: 2,
    doctorName: "Dr. Jane Smith",
    specialty: "Dermatology",
    review: "",
  },
];

export default function GiveReviews() {
  const [reviews, setReviews] = useState(initialReviews);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  function handleGiveReview(doctor) {
    setSelectedDoctor(doctor);
    setIsOpen(true);
  }

  function handleSubmitReview(reviewText) {
    setReviews((prev) =>
      prev.map((item) =>
        item.id === selectedDoctor.id
          ? { ...item, review: reviewText }
          : item
      )
    );

    setIsOpen(false);
    setSelectedDoctor(null);
  }

  return (
    <main className="relative z-10 min-h-[calc(100vh-88px)] px-5 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-3xl font-bold text-black">Reviews</h1>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-slate-100">
                <th className="px-4 py-4 font-bold">S.No.</th>
                <th className="px-4 py-4 font-bold">Doctor Name</th>
                <th className="px-4 py-4 font-bold">Doctor Speciality</th>
                <th className="px-4 py-4 font-bold">Provide Review</th>
                <th className="px-4 py-4 font-bold">Review Given</th>
              </tr>
            </thead>

            <tbody>
              {reviews.map((item) => (
                <tr key={item.id} className="border-b border-slate-200">
                  <td className="px-4 py-5">{item.id}</td>
                  <td className="px-4 py-5">{item.doctorName}</td>
                  <td className="px-4 py-5">{item.specialty}</td>
                  <td className="px-4 py-5">
                    <button
                      disabled={Boolean(item.review)}
                      onClick={() => handleGiveReview(item)}
                      className={`rounded px-8 py-2 text-sm font-semibold text-white ${
                        item.review
                          ? "cursor-not-allowed bg-slate-300"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                    >
                      Give Review
                    </button>
                  </td>
                  <td className="px-4 py-5 italic text-slate-500">
                    {item.review || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isOpen && (
        <ReviewModal
          doctor={selectedDoctor}
          onClose={() => setIsOpen(false)}
          onSubmit={handleSubmitReview}
        />
      )}
    </main>
  );
}