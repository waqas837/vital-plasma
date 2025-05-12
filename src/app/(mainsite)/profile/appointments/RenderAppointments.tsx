'use client';

import { useEffect, useState } from 'react';
import { CalendarCheck, Loader2 } from 'lucide-react';

type Appointment = {
    id: number;
    name: string;
    email: string;
    appointment_date: string;
    is_confirmed: 0 | 1;
    message: string;
};

export default function MyAppointmentsPage() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (!email) return;

        fetch(`/api/appointments?email=${email}`)
            .then((res) => res.json())
            .then((data) => {
                setAppointments(data.appointments || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Failed to fetch appointments', err);
                setLoading(false);
            });
    }, []);

    return (
        <div className="min-h-screen p-8 bg-transparent text-[#D7442E] font-sans">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-serif mb-10 flex items-center gap-3 tracking-tight">
                    <CalendarCheck size={32} className="text-[#FA812F]" />
                    My Appointments
                </h1>

                <div className="rounded-2xl border border-white/20 backdrop-blur-lg bg-white/10 shadow-xl overflow-hidden">
                    {loading ? (
                        <div className="p-12 flex justify-center">
                            <Loader2 className="animate-spin text-[#FA812F]" size={28} />
                        </div>
                    ) : appointments.length === 0 ? (
                        <div className="p-8 text-center text-lg text-gray-600">No appointments found.</div>
                    ) : (
                        <table className="min-w-full text-sm text-left backdrop-blur-md">
                            <thead className="bg-[#FA812F]/90 text-white">
                                <tr>
                                    <th className="px-6 py-4 font-semibold">Date</th>
                                    <th className="px-6 py-4 font-semibold">Status</th>
                                    <th className="px-6 py-4 font-semibold">Message</th>
                                </tr>
                            </thead>
                            <tbody>
                                {appointments.map((appt) => (
                                    <tr
                                        key={appt.id}
                                        className="border-b border-white/10 hover:bg-[#FA812F]/10 transition-all duration-300"
                                    >
                                        <td className="px-6 py-4">
                                            {new Date(appt.appointment_date).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`px-3 py-1 text-xs font-medium rounded-full ${appt.is_confirmed
                                                    ? 'bg-green-200 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                    }`}
                                            >
                                                {appt.is_confirmed ? 'Confirmed' : 'Pending'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-[#D7442E]">
                                            {appt.message || (
                                                <span className="italic text-gray-500">No message</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
