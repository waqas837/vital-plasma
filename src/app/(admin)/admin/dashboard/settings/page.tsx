"use client";

import { useState } from "react";
import { Lock, User, CheckCircle, Sun, Moon } from "lucide-react";

export default function SettingsPage() {
    const [adminInfo, setAdminInfo] = useState({
        name: "John Doe",
        email: "john@example.com",
    });
    const [newPassword, setNewPassword] = useState("");
    const [theme, setTheme] = useState("light");
    const [emailNotifications, setEmailNotifications] = useState(true);

    const handleSaveSettings = () => {
        // Handle saving settings logic (API call or local state update)
        alert("Settings saved successfully!");
    };

    const handleThemeChange = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
        document.documentElement.setAttribute("data-theme", theme === "light" ? "dark" : "light");
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <User className="mr-3 text-3xl" /> Settings
            </h1>

            <div className="space-y-6">
                {/* Admin Info */}
                <div className="p-6 bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Admin Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={adminInfo.name}
                                onChange={(e) => setAdminInfo({ ...adminInfo, name: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                value={adminInfo.email}
                                onChange={(e) => setAdminInfo({ ...adminInfo, email: e.target.value })}
                                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                            />
                        </div>
                    </div>
                </div>

                {/* Change Password */}
                <div className="p-6 bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Change Password</h2>
                    <div>
                        <label className="text-sm font-medium">New Password</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md mt-2"
                        />
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="p-6 bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Notification Settings</h2>
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-3">Email Notifications</label>
                        <input
                            type="checkbox"
                            checked={emailNotifications}
                            onChange={() => setEmailNotifications((prev) => !prev)}
                            className="w-5 h-5 rounded-lg"
                        />
                    </div>
                </div>

                {/* Theme Settings */}
                <div className="p-6 bg-white shadow-xl rounded-lg">
                    <h2 className="text-2xl font-semibold text-orange-500 mb-4">Appearance Settings</h2>
                    <div className="flex items-center">
                        <label className="text-sm font-medium mr-3">Dark Mode</label>
                        <button
                            onClick={handleThemeChange}
                            className="w-10 h-10 bg-gray-200 rounded-full flex justify-center items-center"
                        >
                            {theme === "light" ? (
                                <Moon className="w-5 h-5 text-gray-800" />
                            ) : (
                                <Sun className="w-5 h-5 text-yellow-500" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Save Settings Button */}
                <div className="flex justify-end">
                    <button
                        onClick={handleSaveSettings}
                        className="bg-orange-500 text-white py-2 px-6 rounded-lg shadow-xl hover:bg-orange-600 transition-all duration-300"
                    >
                        Save Settings
                    </button>
                </div>
            </div>
        </div>
    );
}
