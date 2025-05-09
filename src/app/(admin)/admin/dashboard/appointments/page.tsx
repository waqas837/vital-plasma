"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle, XCircle } from "lucide-react";

type Appointment = {
    id: number;
    name: string;
    email: string;
    date: string;
    status: "Pending" | "Approved" | "Rejected";
};

const mockAppointments: Appointment[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        date: "2025-05-10",
        status: "Pending",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane@example.com",
        date: "2025-05-12",
        status: "Approved",
    },
];

export default function AppointmentRequestsPage() {
    const [appointments, setAppointments] = useState<Appointment[]>(mockAppointments);

    const updateStatus = (id: number, status: Appointment["status"]) => {
        setAppointments((prev) =>
            prev.map((a) => (a.id === id ? { ...a, status } : a))
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <CalendarCheck className="mr-3 text-3xl" /> Appointment Requests
            </h1>

            <div className="overflow-auto rounded-lg shadow-xl backdrop-blur-md bg-white/80 p-6 border border-gray-100">
                <table className="min-w-full bg-transparent">
                    <thead className="bg-[#FA812F] text-white">
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Name</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Email</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Date</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Status</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(({ id, name, email, date, status }) => (
                            <tr key={id} className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200">
                                <td className="p-4 text-sm text-gray-800">{name}</td>
                                <td className="p-4 text-sm text-gray-800">{email}</td>
                                <td className="p-4 text-sm text-gray-800">{date}</td>
                                <td className="p-4 text-sm">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm font-medium ${status === "Pending"
                                            ? "bg-yellow-300 text-yellow-800"
                                            : status === "Approved"
                                                ? "bg-green-300 text-green-800"
                                                : "bg-red-300 text-red-800"
                                            }`}
                                    >
                                        {status}
                                    </span>
                                </td>
                                <td className="p-4 space-x-4 flex justify-start items-center">
                                    {/* Approve Button */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => updateStatus(id, "Approved")}
                                            className="bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                            aria-label="Approve"
                                        >
                                            <CheckCircle className="w-5 h-5" />
                                        </button>
                                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                                            Approve
                                        </span>
                                    </div>

                                    {/* Reject Button */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => updateStatus(id, "Rejected")}
                                            className="bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                            aria-label="Reject"
                                        >
                                            <XCircle className="w-5 h-5" />
                                        </button>
                                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                                            Reject
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        {appointments.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-gray-500 text-lg">
                                    No appointments found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
