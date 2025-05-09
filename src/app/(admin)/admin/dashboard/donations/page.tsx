"use client";

import { useState } from "react";
import { DollarSign, Edit, Trash2, Eye } from "lucide-react";

type Donation = {
    id: number;
    donorName: string;
    amount: number;
    date: string;
    status: "Pending" | "Completed" | "Failed";
};

const mockDonations: Donation[] = [
    {
        id: 1,
        donorName: "Alice Johnson",
        amount: 500,
        date: "2025-05-01",
        status: "Completed",
    },
    {
        id: 2,
        donorName: "Bob Brown",
        amount: 300,
        date: "2025-05-03",
        status: "Pending",
    },
    {
        id: 3,
        donorName: "Charlie Davis",
        amount: 750,
        date: "2025-05-05",
        status: "Completed",
    },
];

export default function DonationHistoryPage() {
    const [donations, setDonations] = useState<Donation[]>(mockDonations);
    const [showModal, setShowModal] = useState(false);
    const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null);
    const [editFormData, setEditFormData] = useState<Donation | null>(null);

    const handleView = (id: number) => {
        const donation = donations.find((donation) => donation.id === id);
        alert(`View donation details for donation #${id}: ${JSON.stringify(donation)}`);
    };

    const handleEdit = (donation: Donation) => {
        setEditFormData(donation);
        setShowModal(true);
    };

    const handleDelete = (id: number) => {
        setDonations((prev) => prev.filter((donation) => donation.id !== id));
    };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedDonation(null);
        setEditFormData(null);
    };

    const handleSaveEdit = () => {
        if (editFormData) {
            setDonations((prev) =>
                prev.map((donation) =>
                    donation.id === editFormData.id ? editFormData : donation
                )
            );
            setShowModal(false);
        }
    };

    const handleChange = (e: any) => {
        if (editFormData) {
            setEditFormData({
                ...editFormData,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <DollarSign className="mr-3 text-3xl" /> Donation History
            </h1>

            <div className="overflow-auto rounded-lg shadow-xl backdrop-blur-md bg-white/80 p-6 border border-gray-100">
                <table className="min-w-full bg-transparent">
                    <thead className="bg-[#FA812F] text-white">
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Donor Name</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Amount</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Date</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Status</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.map(({ id, donorName, amount, date, status }) => (
                            <tr
                                key={id}
                                className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200"
                            >
                                <td className="p-4 text-sm text-gray-800">{donorName}</td>
                                <td className="p-4 text-sm text-gray-800">${amount}</td>
                                <td className="p-4 text-sm text-gray-800">{date}</td>
                                <td className="p-4 text-sm">
                                    <span
                                        className={`px-2 py-1 rounded text-sm font-medium ${status === "Pending"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td className="p-4 space-x-4 flex justify-start items-center">
                                    {/* View Button */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => handleView(id)}
                                            className="bg-gradient-to-r from-teal-400 to-teal-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                            aria-label="View"
                                        >
                                            <Eye className="w-5 h-5" />
                                        </button>
                                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                                            View
                                        </span>
                                    </div>

                                    {/* Edit Button */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => handleEdit({ id, donorName, amount, date, status })}
                                            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                            aria-label="Edit"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button>
                                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                                            Edit
                                        </span>
                                    </div>

                                    {/* Delete Button */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => handleDelete(id)}
                                            className="bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                            aria-label="Delete"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                                            Delete
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {donations.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-gray-500">
                                    No donations found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Edit Modal */}
            {showModal && selectedDonation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">Edit Donation</h2>
                        <div>
                            <label className="block text-sm font-medium mb-2">Donor Name</label>
                            <input
                                type="text"
                                name="donorName"
                                value={editFormData?.donorName || ""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Amount</label>
                            <input
                                type="number"
                                name="amount"
                                value={editFormData?.amount || ""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={editFormData?.date || ""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Status</label>
                            <select
                                name="status"
                                value={editFormData?.status || ""}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            >
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Failed">Failed</option>
                            </select>

                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleModalClose}
                                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSaveEdit}
                                className="bg-orange-500 text-white px-6 py-2 rounded-md"
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
