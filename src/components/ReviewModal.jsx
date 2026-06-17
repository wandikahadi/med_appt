export default function ReviewModal({ doctor, onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-5">
            <div className="w-full max-w-3xl bg-white p-2">
                <div className="flex min-h-[520px] flex-col justify-between bg-white">
                    <div className="mx-auto mt-20 w-full max-w-md rounded-lg bg-slate-100 p-8 shadow-sm">
                        <h2 className="mb-6 text-center text-3xl font-bold">
                            Give Your Feedback
                        </h2>

                        <form className="space-y-4">
                            <div>
                                <label className="mb-2 block font-bold">Name:</label>
                                <input
                                    type="text"
                                    defaultValue="Jasmine"
                                    className="w-full rounded border border-slate-300 bg-white px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-bold">Review:</label>
                                <textarea
                                    defaultValue={
                                        doctor?.review || "Excellent consultation"
                                    }
                                    rows="3"
                                    className="w-full resize-none rounded border border-slate-300 bg-white px-4 py-3 outline-none"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-bold">Rating:</label>
                                <div className="text-2xl text-yellow-400">★★★★★</div>
                            </div>

                            <button className="w-full rounded bg-blue-500 py-3 font-medium text-white hover:bg-blue-600">
                                Submit
                            </button>
                        </form>
                    </div>

                    <button
                        onClick={onClose}
                        className="mt-10 w-full rounded bg-blue-500 py-3 font-medium text-white hover:bg-blue-600"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}