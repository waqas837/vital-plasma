"use client";

import { useState, useTransition } from "react";
import { User } from "lucide-react";
import { changeAdminPassword, updateAdminInfo } from "./actions";

export default function SettingsPage() {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [adminId, setAdminId] = useState(1); // hardcode or get from session/auth
    const [isPending, startTransition] = useTransition();

    const handleSaveSettings = () => {
        startTransition(async () => {
            if (!email.trim()) {
                alert("Email is required");
                return;
            }

            const emailRes = await updateAdminInfo(adminId, email);
            if (!emailRes.success) {
                alert("Failed to update email");
                return;
            }

            if (newPassword.trim()) {
                const passRes = await changeAdminPassword(adminId, newPassword);
                if (!passRes.success) {
                    alert("Failed to update password");
                    return;
                }
            }

            alert("Settings updated successfully");
            setNewPassword(""); // Clear password field after update
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6 max-w-xl mx-auto">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <User className="mr-3 text-3xl" /> Settings
            </h1>

            <div className="space-y-6">
                {/* Email Update */}
                <div className="p-6 bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Admin Email</h2>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Enter new email"
                    />
                </div>

                {/* Change Password */}
                <div className="p-6 bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Change Password</h2>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Enter new password"
                    />
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button
                        disabled={isPending}
                        onClick={handleSaveSettings}
                        className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-xl hover:bg-orange-600 transition-all duration-300 disabled:opacity-50"
                    >
                        {isPending ? "Saving..." : "Save Settings"}
                    </button>
                </div>
            </div>
        </div>
    );
}
