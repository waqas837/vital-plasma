"use client";

import { useEffect, useState } from "react";
import { PlusCircle, Edit, Trash2 } from "lucide-react";
import { deleteHospital, getHospitals, insertHospital, updateHospital } from "./actions";


type Hospital = {
    id: number;
    name: string;
    location: string;
};

export default function HospitalsPage() {
    const [hospitals, setHospitals] = useState<Hospital[]>([]);
    const [newHospital, setNewHospital] = useState({ name: "", location: "" });
    const [editFormData, setEditFormData] = useState<Hospital | null>(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const loadHospitals = async () => {
            const res = await getHospitals();
            if (res.success) setHospitals(res.hospitals);
            else alert("Failed to load hospitals.");
        };
        loadHospitals();
    }, []);

    const handleAddHospital = async () => {
        if (!newHospital.name.trim() || !newHospital.location.trim()) {
            alert("Please enter valid name and location.");
            return;
        }
        const res = await insertHospital(newHospital.name, newHospital.location);
        if (res.success) {
            const refreshed = await getHospitals();
            if (refreshed.success) setHospitals(refreshed.hospitals);
            setNewHospital({ name: "", location: "" });
            setShowModal(false);
        } else {
            alert(res.message);
        }
    };

    const handleEditHospital = (hospital: Hospital) => {
        setEditFormData(hospital);
        setShowModal(true);
    };

    const handleSaveEdit = async () => {
        if (editFormData) {
            const res = await updateHospital(editFormData.id, editFormData.name, editFormData.location);
            if (res.success) {
                const refreshed = await getHospitals();
                if (refreshed.success) setHospitals(refreshed.hospitals);
                setEditFormData(null);
                setShowModal(false);
            } else {
                alert(res.message);
            }
        }
    };

    const handleDeleteHospital = async (id: number) => {
        if (!confirm("Are you sure you want to delete this hospital?")) return;

        const res = await deleteHospital(id);
        if (res.success) {
            setHospitals((prev) => prev.filter((h) => h.id !== id));
        } else {
            alert(res.message);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: "name" | "location"
    ) => {
        if (editFormData) {
            setEditFormData({ ...editFormData, [field]: e.target.value });
        }
    };

    const handleNewHospitalChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        field: "name" | "location"
    ) => {
        setNewHospital({ ...newHospital, [field]: e.target.value });
    };

    const handleModalClose = () => {
        setShowModal(false);
        setEditFormData(null);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
                <PlusCircle className="mr-2" /> Hospitals Management
            </h1>

            <button
                onClick={() => setShowModal(true)}
                className="bg-orange-500 text-white px-4 py-2 rounded-md mb-4 flex items-center"
            >
                <PlusCircle className="mr-2" /> Add Hospital
            </button>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-orange-500 text-white">
                        <tr>
                            <th className="p-4 text-left">Name</th>
                            <th className="p-4 text-left">Location</th>
                            <th className="p-4 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hospitals.map((hospital) => (
                            <tr key={hospital.id} className="border-t">
                                <td className="p-4">{hospital.name}</td>
                                <td className="p-4">{hospital.location}</td>
                                <td className="p-4 space-x-3">
                                    <button
                                        onClick={() => handleEditHospital(hospital)}
                                        className="bg-blue-500 text-white p-2 rounded"
                                    >
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => handleDeleteHospital(hospital.id)}
                                        className="bg-red-500 text-white p-2 rounded"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {hospitals.length === 0 && (
                            <tr>
                                <td colSpan={3} className="p-4 text-center text-gray-500">
                                    No hospitals found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 bg-white bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-md w-96">
                        <h2 className="text-xl font-semibold mb-4">
                            {editFormData ? "Edit Hospital" : "Add Hospital"}
                        </h2>
                        <input
                            type="text"
                            placeholder="Hospital Name"
                            value={editFormData ? editFormData.name : newHospital.name}
                            onChange={(e) =>
                                editFormData
                                    ? handleInputChange(e, "name")
                                    : handleNewHospitalChange(e, "name")
                            }
                            className="w-full border px-3 py-2 mb-3 rounded"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={editFormData ? editFormData.location : newHospital.location}
                            onChange={(e) =>
                                editFormData
                                    ? handleInputChange(e, "location")
                                    : handleNewHospitalChange(e, "location")
                            }
                            className="w-full border px-3 py-2 mb-4 rounded"
                        />
                        <div className="flex justify-end space-x-3">
                            <button
                                onClick={handleModalClose}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={editFormData ? handleSaveEdit : handleAddHospital}
                                className="px-4 py-2 bg-orange-500 text-white rounded"
                            >
                                {editFormData ? "Save" : "Add"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
