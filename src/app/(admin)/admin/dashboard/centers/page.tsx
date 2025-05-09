"use client";

import { useState } from "react";
import { Edit, Trash2, PlusCircle } from "lucide-react";

type Hospital = {
    id: number;
    name: string;
    location: string;
};

const mockHospitals: Hospital[] = [
    {
        id: 1,
        name: "City Medical Center",
        location: "123 Main St, Downtown",
    },
    {
        id: 2,
        name: "Green Valley Hospital",
        location: "456 Oak Rd, Green Valley",
    },
    {
        id: 3,
        name: "Sunrise Health Clinic",
        location: "789 Pine Ln, Hilltop",
    },
];

export default function HospitalsPage() {
    const [hospitals, setHospitals] = useState<Hospital[]>(mockHospitals);
    const [showModal, setShowModal] = useState(false);
    const [editFormData, setEditFormData] = useState<Hospital | null>(null);
    const [newHospital, setNewHospital] = useState<Hospital>({
        id: 0,
        name: "",
        location: "",
    });

    const handleAddHospital = () => {
        const newHospitalData = {
            ...newHospital,
            id: Date.now(), // Unique ID based on timestamp
        };
        setHospitals((prev) => [...prev, newHospitalData]);
        setNewHospital({ id: 0, name: "", location: "" });
        setShowModal(false);
    };

    const handleEditHospital = (hospital: Hospital) => {
        setEditFormData(hospital);
        setShowModal(true);
    };

    const handleDeleteHospital = (id: number) => {
        setHospitals((prev) => prev.filter((hospital) => hospital.id !== id));
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: "name" | "location"
    ) => {
        if (editFormData) {
            setEditFormData({
                ...editFormData,
                [field]: e.target.value,
            });
        }
    };

    const handleNewHospitalChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: "name" | "location"
    ) => {
        setNewHospital({
            ...newHospital,
            [field]: e.target.value,
        });
    };

    const handleSaveEdit = () => {
        if (editFormData) {
            setHospitals((prev) =>
                prev.map((hospital) =>
                    hospital.id === editFormData.id ? editFormData : hospital
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
                <PlusCircle className="mr-3 text-3xl" /> Hospitals Management
            </h1>

            <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 text-white py-2 px-4 rounded-lg shadow-xl hover:bg-orange-600 transition-all duration-300 flex items-center mb-6"
            >
                <PlusCircle className="mr-2" />
                Add Hospital
            </button>

            <div className="overflow-auto rounded-lg shadow-xl backdrop-blur-md bg-white/80 p-6 border border-gray-100">
                <table className="min-w-full bg-transparent">
                    <thead className="bg-[#FA812F] text-white">
                        <tr>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Hospital Name</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Location</th>
                            <th className="text-left p-4 text-sm font-semibold tracking-wide">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map(({ id, name, location }) => (
                            <tr
                                key={id}
                                className="border-b border-gray-200 hover:bg-orange-50 transition-all duration-200"
                            >
                                <td className="p-4 text-sm text-gray-800">{name}</td>
                                <td className="p-4 text-sm text-gray-800">{location}</td>
                                <td className="p-4 space-x-4 flex justify-start items-center">
                                    {/* Edit Button */}
                                    <button
                                        onClick={() => handleEditHospital({ id, name, location })}
                                        className="bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                        aria-label="Edit"
                                    >
                                        <Edit className="w-5 h-5" />
                                    </button>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDeleteHospital(id)}
                                        className="bg-gradient-to-r from-red-400 to-red-600 text-white p-3 rounded-full shadow-xl hover:scale-105 transition-all duration-300 transform hover:shadow-2xl"
                                        aria-label="Delete"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {hospitals.length === 0 && (
                            <tr>
                                <td colSpan={3} className="text-center p-4 text-gray-500">
                                    No hospitals found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add/Edit Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-gray backdrop-blur-sm bg-opacity-50 z-40 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                        <h2 className="text-2xl font-bold text-orange-500 mb-4">
                            {editFormData ? "Edit Hospital" : "Add Hospital"}
                        </h2>
                        <div>
                            <label className="block text-sm font-medium mb-2">Hospital Name</label>
                            <input
                                type="text"
                                value={editFormData ? editFormData.name : newHospital.name}
                                onChange={(e) =>
                                    editFormData
                                        ? handleInputChange(e, "name")
                                        : handleNewHospitalChange(e, "name")
                                }
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Location</label>
                            <input
                                type="text"
                                value={editFormData ? editFormData.location : newHospital.location}
                                onChange={(e) =>
                                    editFormData
                                        ? handleInputChange(e, "location")
                                        : handleNewHospitalChange(e, "location")
                                }
                                className="w-full p-3 border border-gray-300 rounded-md mb-4"
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
                                onClick={editFormData ? handleSaveEdit : handleAddHospital}
                                className="bg-orange-500 text-white px-6 py-2 rounded-md"
                            >
                                {editFormData ? "Save Changes" : "Add Hospital"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
