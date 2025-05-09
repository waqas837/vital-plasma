"use client";

import { useState } from "react";
import { Edit, Trash2, Bell, PlusCircle } from "lucide-react";

type Notification = {
    id: number;
    title: string;
    message: string;
    createdAt: string;
};

const mockNotifications: Notification[] = [
    {
        id: 1,
        title: "System Update",
        message: "A system update will be applied tonight. Please be aware of potential downtime.",
        createdAt: "2025-05-08 10:00 AM",
    },
    {
        id: 2,
        title: "New Donation Received",
        message: "A new donation has been successfully received. Thank you for your contribution.",
        createdAt: "2025-05-08 12:30 PM",
    },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
    const [showModal, setShowModal] = useState(false);
    const [editFormData, setEditFormData] = useState<Notification | null>(null);
    const [newNotification, setNewNotification] = useState<Notification>({
        id: 0,
        title: "",
        message: "",
        createdAt: "",
    });

    const handleAddNotification = () => {
        const newNotificationData = {
            ...newNotification,
            id: Date.now(),
            createdAt: new Date().toLocaleString(), // Timestamp for when notification is created
        };
        setNotifications((prev) => [...prev, newNotificationData]);
        setNewNotification({ id: 0, title: "", message: "", createdAt: "" });
        setShowModal(false);
    };

    const handleEditNotification = (notification: Notification) => {
        setEditFormData(notification);
        setShowModal(true);
    };

    const handleDeleteNotification = (id: number) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: "title" | "message"
    ) => {
        if (editFormData) {
            setEditFormData({
                ...editFormData,
                [field]: e.target.value,
            });
        }
    };

    const handleNewNotificationChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        field: "title" | "message"
    ) => {
        setNewNotification({
            ...newNotification,
            [field]: e.target.value,
        });
    };

    const handleSaveEdit = () => {
        if (editFormData) {
            setNotifications((prev) =>
                prev.map((notification) =>
                    notification.id === editFormData.id ? editFormData : notification
                )
            );
            setShowModal(false);
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        setEditFormData(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <Bell className="mr-3 text-3xl" /> Notifications
            </h1>

            <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center mb-6"
            >
                <PlusCircle className="mr-2" />
                Add Notification
            </button>

            <div className="overflow-auto rounded-lg shadow-xl backdrop-blur-md bg-white/80 p-6 border border-gray-100">
                <table className="min-w-full bg-transparent">
                    <thead className="bg-[#FA812F] text-white">
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Title</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Message</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Created At</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notifications.map(({ id, title, message, createdAt }) => (
                            <tr
                                key={id}
                                className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200"
                            >
                                <td className="p-4 text-sm text-gray-800">{title}</td>
                                <td className="p-4 text-sm text-gray-800">{message}</td>
                                <td className="p-4 text-sm text-gray-800">{createdAt}</td>
                                <td className="p-4 space-x-4 flex justify-start items-center">
                                    {/* Edit Button */}
                                    <button
                                        onClick={() => handleEditNotification({ id, title, message, createdAt })}
                                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                        aria-label="Edit"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteNotification(id)}
                                        className="bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                        aria-label="Delete"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {notifications.length === 0 && (
                            <tr>
                                <td colSpan={4} className="text-center p-4 text-gray-500">
                                    No notifications found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 z-40 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            {editFormData ? "Edit Notification" : "Add Notification"}
                        </h2>
                        <div>
                            <label className="block text-sm font-medium mb-2">Title</label>
                            <input
                                type="text"
                                value={editFormData ? editFormData.title : newNotification.title}
                                onChange={(e) =>
                                    editFormData
                                        ? handleInputChange(e, "title")
                                        : handleNewNotificationChange(e, "title")
                                }
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Message</label>
                            <textarea
                                value={editFormData ? editFormData.message : newNotification.message}
                                onChange={(e) =>
                                    editFormData
                                        ? handleInputChange(e, "message")
                                        : handleNewNotificationChange(e, "message")
                                }
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                                rows={4}
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={handleModalClose}
                                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={editFormData ? handleSaveEdit : handleAddNotification}
                                className="bg-orange-500 text-white px-6 py-2 rounded-md"
                            >
                                {editFormData ? "Save Changes" : "Add Notification"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
