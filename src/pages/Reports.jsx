import jsPDF from "jspdf";

export default function Reports() {
    const userName = sessionStorage.getItem("name") || "Jasmine Smith";
    const userEmail = sessionStorage.getItem("email") || "jasmine@gmail.com";
    const userPhone = sessionStorage.getItem("phone") || "(898) 564-1212";

    const reports = [
        {
            id: 1,
            doctorName: "Dr. John Doe",
            speciality: "Cardiology",
            license: "12882-1",
            doctorPhone: "(555) 987-6543",
            doctorEmail: "jdoe@stayhealthy.com",
            date: "July 10, 2023",
            medicine: "Amoxicillin",
            dosage: "500mg",
            directions: "Take 1 capsule three times a day with meals.",
            quantity: "30 capsules",
        },
        {
            id: 2,
            doctorName: "Dr. Jane Smith",
            speciality: "Dermatology",
            license: "45678-9",
            doctorPhone: "(555) 222-1111",
            doctorEmail: "jane@stayhealthy.com",
            date: "August 15, 2023",
            medicine: "Ibuprofen",
            dosage: "200mg",
            directions: "Take after meals when needed.",
            quantity: "20 tablets",
        },
    ];

    const generatePDF = (report, action = "view") => {
        const doc = new jsPDF("p", "mm", "a4");

        doc.setFont("helvetica", "bold");
        doc.setFontSize(24);
        doc.text("StayHealthy", 20, 25);

        doc.setDrawColor(180, 210, 230);
        doc.line(20, 35, 190, 35);

        doc.setFontSize(13);
        doc.text("Patient Information:", 125, 55);

        doc.setFont("helvetica", "normal");
        doc.text(`Name: ${userName}`, 125, 68);
        doc.text("Gender: Female", 125, 80);
        doc.text("Date of Birth: January 15, 1985", 125, 92);
        doc.text(`Phone Number: ${userPhone}`, 125, 104);
        doc.text(`Email: ${userEmail}`, 125, 116);

        doc.setFont("helvetica", "bold");
        doc.text("Prescription Details:", 20, 145);

        doc.setFont("helvetica", "normal");
        doc.text(`Doctor: ${report.doctorName}`, 20, 158);
        doc.text(`Medical License: ${report.license}`, 20, 170);
        doc.text(`Phone: ${report.doctorPhone}`, 20, 182);
        doc.text(`Email: ${report.doctorEmail}`, 20, 194);
        doc.text(`Date: ${report.date}`, 20, 206);

        doc.setFont("helvetica", "bold");
        doc.text("Prescription:", 20, 222);

        doc.setFont("helvetica", "normal");
        doc.text(`• Medication: ${report.medicine}`, 28, 236);
        doc.text(`Dosage: ${report.dosage}`, 38, 248);
        doc.text(`Directions: ${report.directions}`, 38, 260);
        doc.text(`Quantity: ${report.quantity}`, 38, 272);

        if (action === "download") {
            doc.save(`${report.doctorName}-report.pdf`);
        } else {
            window.open(doc.output("bloburl"), "_blank");
        }
    };

    return (
        <main className="px-10 py-10">
            <div className="mx-auto max-w-5xl">
                <h1 className="mb-5 text-3xl font-bold">Reports</h1>

                <table className="w-full border-collapse text-left">
                    <thead>
                        <tr className="bg-slate-100">
                            <th className="px-4 py-3">S.No.</th>
                            <th className="px-4 py-3">Doctor Name</th>
                            <th className="px-4 py-3">Doctor Speciality</th>
                            <th className="px-4 py-3">View Report</th>
                            <th className="px-4 py-3">Download Report</th>
                        </tr>
                    </thead>

                    <tbody>
                        {reports.map((report, index) => (
                            <tr key={report.id} className="border-b">
                                <td className="px-4 py-3">{index + 1}</td>
                                <td className="px-4 py-3">{report.doctorName}</td>
                                <td className="px-4 py-3">{report.speciality}</td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => generatePDF(report, "view")}
                                        className="rounded bg-blue-500 px-4 py-2 text-white"
                                    >
                                        View Report
                                    </button>
                                </td>
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => generatePDF(report, "download")}
                                        className="rounded bg-blue-500 px-4 py-2 text-white"
                                    >
                                        Download Report
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
}