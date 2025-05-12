"use client";

import { useState } from "react";
import { CalendarCheck, CheckCircle, XCircle } from "lucide-react";
import { submitMessage, confirmAppointment, deleteAppointment } from './actions';

type Appointment = {
  id: number;
  name: string;
  email: string;
  appointment_date: string;
  is_confirmed: 0 | 1;
  message: string;
};

export default function AppointmentRequestsPage({
  initialAppointments,
}: {
  initialAppointments: Appointment[];
}) {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);

  // Handle confirmation or rejection of appointments
  const updateStatus = async (id: number, is_confirmed: 0 | 1) => {
    const response = await confirmAppointment(id);
    if (response.success) {
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, is_confirmed } : a))
      );
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  // Handle message changes for an appointment
  const handleMessageChange = (id: number, newMessage: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, message: newMessage } : a))
    );
  };

  // Handle submitting the message
  const handleMessageSubmit = async (id: number) => {
    const response = await submitMessage(id, appointments.find(a => a.id === id)?.message || '');
    if (response.success) {
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  // Handle deleting an appointment
  const handleDelete = async (id: number) => {
    const response = await deleteAppointment(id);
    if (response.success) {
      setAppointments(appointments.filter((appointment) => appointment.id !== id));
      alert(response.message);
    } else {
      alert(response.message);
    }
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
              <th className="text-left p-4 text-sm font-semibold tracking-wide">Confirmed</th>
              <th className="text-left p-4 text-sm font-semibold tracking-wide">Message</th>
              <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map(({ id, name, email, appointment_date, is_confirmed, message }) => (
              <tr key={id} className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200">
                <td className="p-4 text-sm text-gray-800">{name}</td>
                <td className="p-4 text-sm text-gray-800">{email}</td>
                <td className="p-4 text-sm text-gray-800">{new Date(appointment_date).toLocaleDateString()}</td>
                <td className="p-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${is_confirmed === 0
                      ? "bg-yellow-300 text-yellow-800"
                      : "bg-green-300 text-green-800"
                      }`}
                  >
                    {is_confirmed === 0 ? "Not Confirmed" : "Confirmed"}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-800">
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#FA812F]"
                    placeholder="Write a message"
                    value={message ?? ""}
                    onChange={(e) => handleMessageChange(id, e.target.value)}
                  />
                  <button
                    onClick={() => handleMessageSubmit(id)}
                    className="mt-2 bg-[#FA812F] text-white p-2 rounded-md hover:bg-[#fa6a2f]"
                  >
                    Submit Message
                  </button>
                </td>
                <td className="p-4 space-x-4 flex justify-start items-center">
                  <div className="relative group">
                    <button
                      onClick={() => updateStatus(id, 1)} // Confirm appointment
                      className="bg-gradient-to-r from-green-400 to-green-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                      aria-label="Approve"
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                      Confirm
                    </span>
                  </div>
                  <div className="relative group">
                    <button
                      onClick={() => updateStatus(id, 0)} // Reject appointment
                      className="bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                      aria-label="Reject"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                      Reject
                    </span>
                  </div>
                  <div className="relative group">
                    <button
                      onClick={() => handleDelete(id)} // Delete appointment
                      className="bg-gradient-to-r from-red-600 to-red-800 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                      aria-label="Delete"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                      Delete
                    </span>
                  </div>
                </td>
              </tr>
            ))}
            {appointments.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500 text-lg">
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
