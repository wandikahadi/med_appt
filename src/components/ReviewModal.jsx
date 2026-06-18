import { useState } from "react";

export default function ReviewModal({ doctor, onClose, onSubmit }) {
    const [review, setReview] = useState("");
    const [showWarning, setShowWarning] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();

        if (!review.trim()) {
            setShowWarning(true);
            return;
        }

        onSubmit(review);
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-md rounded bg-white p-6 shadow-lg"
            >
                <h2 className="mb-4 text-xl font-bold">Give Your Feedback</h2>

                <p className="mb-2">
                    Doctor: <strong>{doctor?.doctorName}</strong>
                </p>

                <p className="mb-4">
                    Speciality: <strong>{doctor?.specialty}</strong>
                </p>

                {showWarning && (
                    <p className="mb-3 text-sm text-red-600">
                        Please fill out review.
                    </p>
                )}

                <textarea
                    className="mb-4 h-28 w-full rounded border p-2"
                    placeholder="Write your review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />

                <div className="flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded bg-slate-300 px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        type="submit"
                        className="rounded bg-blue-500 px-4 py-2 text-white"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}