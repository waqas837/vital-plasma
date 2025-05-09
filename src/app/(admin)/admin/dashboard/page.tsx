"use client";

import { Users, CalendarCheck, Droplet } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-orange-500 mb-6">
        Welcome to the Admin Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-5 shadow-md rounded-lg border-l-4 border-orange-500 flex items-center space-x-4">
          <Users className="w-10 h-10 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-xl font-semibold">1,248</p>
          </div>
        </div>

        <div className="bg-white p-5 shadow-md rounded-lg border-l-4 border-orange-500 flex items-center space-x-4">
          <CalendarCheck className="w-10 h-10 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Appointments</p>
            <p className="text-xl font-semibold">384</p>
          </div>
        </div>

        <div className="bg-white p-5 shadow-md rounded-lg border-l-4 border-orange-500 flex items-center space-x-4">
          <Droplet className="w-10 h-10 text-orange-500" />
          <div>
            <p className="text-sm text-gray-500">Donations</p>
            <p className="text-xl font-semibold">712</p>
          </div>
        </div>
      </div>

      {/* Placeholder for Charts or Details */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold mb-2 text-gray-700">
          Activity Overview
        </h2>
        <p className="text-sm text-gray-500">
          This section can include charts, logs, or recent actions.
        </p>
      </div>
    </div>
  );
}
