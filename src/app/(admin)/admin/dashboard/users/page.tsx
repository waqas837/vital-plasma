"use client";

import { useState, useEffect } from "react";
import { User, Trash2 } from "lucide-react";
import { deleteSingleUser, getAllUsers } from "./actions";

type UserType = {
    id: number;
    name: string;
    email: string;
    is_confirmed: string;
};

export default function UsersPage() {
    const [users, setUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const data: any = await getAllUsers();
                if (data.success) {
                    console.log("data", data)
                    setUsers(data.users
                    );
                } else {
                    alert(data.message || "Failed to fetch users");
                }
            } catch (error) {
                alert("Error fetching users");
            } finally {
                setLoading(false);
            }
        }
        fetchUsers();
    }, []);

    const handleEdit = (id: number) => {
        alert(`Edit user ${id}`);
    };

    const handleDelete = async (id: any) => {
        await deleteSingleUser(id)
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    if (loading) {
        return <p>Loading users...</p>;
    }

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
                            {/* <th className="text-left p-4 text-sm font-semibold tracking-wide">Status</th> */}
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? users.map(({ id, name, email, is_confirmed }) => (
                            <tr key={id} className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200">
                                <td className="p-4 text-sm text-gray-800">{name}</td>
                                <td className="p-4 text-sm text-gray-800">{email}</td>

                                <td className="p-4 space-x-4 flex justify-start items-center">
                                    <div className="relative group">
                                        {/* <button
                                            onClick={() => handleEdit(id)}
                                            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                            aria-label="Edit"
                                        >
                                            <Edit className="w-5 h-5" />
                                        </button> */}
                                        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black text-white text-xs rounded px-2 py-1 bottom-10 left-1/2 transform -translate-x-1/2">
                                            Edit
                                        </span>
                                    </div>

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
                        )) : (
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
