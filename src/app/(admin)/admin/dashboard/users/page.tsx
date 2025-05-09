"use client";

import { useState } from "react";
import { User, Edit, Trash2 } from "lucide-react";

type User = {
    id: number;
    name: string;
    email: string;
    role: "Admin" | "User" | "Moderator";
};

const mockUsers: User[] = [
    {
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
        role: "Admin",
    },
    {
        id: 2,
        name: "Bob Brown",
        email: "bob@example.com",
        role: "User",
    },
    {
        id: 3,
        name: "Charlie Davis",
        email: "charlie@example.com",
        role: "Moderator",
    },
];

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>(mockUsers);

    const handleEdit = (id: number) => {
        alert(`Edit user ${id}`);
    };

    const handleDelete = (id: number) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <h1 className="text-4xl font-serif text-orange-500 mb-8 flex items-center">
                <User className="mr-3 text-3xl" /> Users
            </h1>

            <div className="overflow-auto rounded-lg shadow-xl backdrop-blur-md bg-white/80 p-6 border border-gray-100">
                <table className="min-w-full bg-transparent">
                    <thead className="bg-[#FA812F] text-white">
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Name</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Email</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Role</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(({ id, name, email, role }) => (
                            <tr key={id} className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200">
                                <td className="p-4 text-sm text-gray-800">{name}</td>
                                <td className="p-4 text-sm text-gray-800">{email}</td>
                                <td className="p-4 text-sm text-gray-800">{role}</td>
                                <td className="p-4 space-x-4 flex justify-start items-center">
                                    {/* Edit Button */}
                                    <div className="relative group">
                                        <button
                                            onClick={() => handleEdit(id)}
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
                        {users.length === 0 && (
                            <tr>
                                <td colSpan={5} className="text-center p-4 text-gray-500 text-lg">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
