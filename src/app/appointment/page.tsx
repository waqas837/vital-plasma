"use client"
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Make sure to include react-calendar styles.

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const AppointmentPage = () => {
    const [date, setDate] = useState<Value>(new Date()); // Updated to handle single date or date range
    const [time, setTime] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-emerald-100 to-emerald-200 p-6 md:p-8 flex items-center justify-center">
            <motion.div
                className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
            >
                <motion.h1
                    className="text-3xl md:text-4xl font-extrabold text-emerald-800 text-center mb-6 md:mb-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Schedule Your Appointment
                </motion.h1>

                {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="flex flex-col md:flex-row md:space-x-6">
                            <div className="w-full md:w-1/2">
                                <motion.input
                                    type="text"
                                    placeholder="Full Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition mb-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.6 }}
                                />
                            </div>

                            <div className="w-full md:w-1/2">
                                <motion.input
                                    type="email"
                                    placeholder="Email Address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.6 }}
                                />
                            </div>
                        </div>

                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                        >
                            <div className="w-full bg-white rounded-xl shadow-lg">
                                <Calendar
                                    onChange={setDate} // This now works with the new type (single date or date range)
                                    value={date}
                                    className="rounded-xl p-4 shadow-xl"
                                    tileClassName="p-2 rounded-lg"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <select
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                className="w-full p-4 rounded-xl border-2 border-emerald-300 shadow-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
                                required
                            >
                                <option value="" disabled>Select a Time Slot</option>
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="01:00 PM">01:00 PM</option>
                                <option value="02:00 PM">02:00 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                            </select>
                        </motion.div>

                        <motion.button
                            type="submit"
                            className="w-full mt-8 p-4 rounded-full bg-emerald-600 text-white text-xl font-semibold shadow-xl hover:bg-emerald-700 transition duration-200 ease-in-out"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                        >
                            Confirm Appointment
                        </motion.button>
                    </form>
                ) : (
                    <motion.div
                        className="mt-8 p-6 text-center text-xl text-emerald-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-bold text-2xl">Your Appointment is Confirmed!</h2>
                        <p className="mt-4">
                            <strong>Name:</strong> {name} <br />
                            <strong>Email:</strong> {email} <br />
                            <strong>Date:</strong> {date instanceof Date ? date.toLocaleDateString() : 'N/A'} <br />
                            <strong>Time:</strong> {time} <br />
                        </p>
                        <motion.button
                            className="mt-6 p-4 rounded-full bg-emerald-600 text-white text-lg font-semibold shadow-xl hover:bg-emerald-700 transition duration-200 ease-in-out"
                            onClick={() => setSubmitted(false)}
                        >
                            Book Another Appointment
                        </motion.button>
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
};

export default AppointmentPage;
