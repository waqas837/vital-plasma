"use client";

import { useState, useEffect } from "react";
import { DollarSign, Trash2 } from "lucide-react";
import { get_donation_history } from "./actions";
 
type Donation = {
    id: number;
    appointment_date: any,
    donation_done: any,
    name: string,
    amount: number;
    date: string;
};



export default function DonationHistoryPage() {
    const [donations, setDonations] = useState<Donation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const data: any = await get_donation_history();
                setDonations(data.rows);
            } catch (error) {
                console.error("Failed to fetch donations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchDonations();
    }, []);

    const handleDelete = (id: number) => {
        setDonations((prev) => prev.filter((donation) => donation.id !== id));
    };


    function formatDate(dateString: string) {
        const date = new Date(dateString);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, "0");
        const day = String(date.getUTCDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <DollarSign className="mr-3 text-3xl" /> Donation History
            </h1>

            <div className="overflow-auto rounded-lg shadow-xl backdrop-blur-md bg-white/80 p-6 border border-gray-100">
                {loading ? (
                    <div className="text-center py-10 text-gray-500">Loading donations...</div>
                ) : (
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
                            {donations.map(({ id, name, amount, appointment_date, donation_done }) => (
                                <tr
                                    key={id}
                                    className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200"
                                >
                                    <td className="p-4 text-sm text-gray-800">{name}</td>
                                    <td className="p-4 text-sm text-gray-800">${amount ?? "0"}</td>
                                    <td className="p-4 text-sm text-gray-800">{formatDate(appointment_date)}</td>
                                    <td className="p-4 text-sm">
                                        <span
                                            className={`px-2 py-1 rounded text-sm font-medium ${donation_done === 0
                                                ? "bg-yellow-100 text-yellow-700"
                                                : donation_done === 1
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-red-100 text-red-700"
                                                }`}
                                        >
                                            {donation_done === 1 ? "Donor has donated plasma" : "Plasma not donated yet"}
                                        </span>

                                    </td>
                                    <td className="p-4 flex justify-start items-center">
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
                            {donations.length === 0 && !loading && (
                                <tr>
                                    <td colSpan={5} className="text-center p-4 text-gray-500">
                                        No donations found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}
