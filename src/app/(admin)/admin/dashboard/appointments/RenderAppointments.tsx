"use client";

import { useState } from "react";
import {
  CalendarCheck,
  CheckCircle2,
  X,
  Trash2,
  HandCoins
} from "lucide-react";
import {
  submitMessage,
  confirmAppointment,
  deleteAppointment,
  have_donated_done
} from "./actions";

type Appointment = {
  id: number;
  name: string;
  email: string;
  appointment_date: string;
  is_confirmed: 0 | 1;
  message: string;
  donation_done: 0 | 1
};

export default function AppointmentRequestsPage({
  initialAppointments,
  user
}: {
  initialAppointments: Appointment[];
  user: string;
}) {
  const [appointments, setAppointments] = useState<Appointment[]>(
    initialAppointments
  );

  const updateStatus = async (id: number, is_confirmed: 0 | 1) => {
    const response = await confirmAppointment(id, is_confirmed);
    if (response.success) {
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, is_confirmed } : a))
      );
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  const donationDone = async (id: number) => {
    const response = await have_donated_done(id, 1);
    if (response.success) {
      setAppointments((prev) =>
        prev.map((a) => (a.id === id ? { ...a, donate_done: 1 } : a))
      );
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  const handleMessageChange = (id: number, newMessage: string) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, message: newMessage } : a))
    );
  };

  const handleMessageSubmit = async (id: number) => {
    const response = await submitMessage(
      id,
      appointments.find((a) => a.id === id)?.message || ""
    );
    alert(response.message);
  };

  const handleDelete = async (id: number) => {
    const response = await deleteAppointment(id);
    if (response.success) {
      setAppointments(appointments.filter((a) => a.id !== id));
      alert(response.message);
    } else {
      alert(response.message);
    }
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
              <th className="text-left p-4 text-sm font-semibold tracking-wide">Message</th>
              {user === "admin" && (
                <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
              )}
            </tr>
          </thead>
          <tbody>
            {appointments.map(({ id, name, email, appointment_date, is_confirmed, message, donation_done }) => (
              <tr key={id} className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200">
                <td className="p-4 text-sm text-gray-800">{name}</td>
                <td className="p-4 text-sm text-gray-800">{email}</td>
                <td className="p-4 text-sm text-gray-800">{formatDate(appointment_date)}</td>
                <td className="p-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${is_confirmed === 0
                      ? "bg-yellow-300 text-yellow-800"
                      : donation_done === 1
                        ? "bg-green-700 text-white"
                        : "bg-green-300 text-green-800"
                    }`}>
                    {is_confirmed === 0
                      ? "Not Confirmed"
                      : donation_done === 1
                        ? "Donation Completed"
                        : "Confirmed"}
                  </span>

                </td>
                <td className="p-4 text-sm text-gray-800">
                  {user !== "simpleUser" ? (
                    <>
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
                    </>
                  ) : (
                    <p>{message || "Waiting for message"}</p>
                  )}
                </td>
                {user === "admin" && (
                  <td className="p-4 text-sm">
                    <div className="flex flex-wrap gap-2 items-center">
                      <TooltipButton
                        icon={<CheckCircle2 className="w-4 h-4" />}
                        tooltip="Confirm"
                        onClick={() => updateStatus(id, 1)}
                      />
                      <TooltipButton
                        icon={<X className="w-4 h-4" />}
                        tooltip="Reject"
                        onClick={() => updateStatus(id, 0)}
                      />
                      <TooltipButton
                        icon={<Trash2 className="w-4 h-4" />}
                        tooltip="Delete"
                        onClick={() => handleDelete(id)}
                      />
                      {is_confirmed === 1 && (
                        <TooltipButton
                          icon={<HandCoins className="w-4 h-4" />}
                          tooltip="Donation Done By Donour?"
                          onClick={() => donationDone(id)}
                        />
                      )}
                    </div>
                  </td>
                )}
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

// ✅ Fixed tooltip button component
function TooltipButton({
  icon,
  tooltip,
  onClick
}: {
  icon: React.ReactNode;
  tooltip: string;
  onClick: () => void;
}) {
  return (
    <div className="relative group flex items-center justify-center">
      <button
        onClick={onClick}
        className="p-2 rounded-full backdrop-blur-md bg-white/20 ring-1 ring-gray-300 hover:bg-white/30 transition-all duration-200 cursor-pointer relative z-10"
      >
        {icon}
      </button>
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
        <div className="bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md whitespace-nowrap">
          {tooltip}
        </div>
      </div>
    </div>
  );
}
