'use client';

import { motion } from 'framer-motion';
import { Heart, Users, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
    return (
        <section className="bg-gray-50 text-gray-900 px-6 py-24 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h1 className="text-4xl sm:text-5xl font-serif font-extrabold bg-gradient-to-r from-[#FA812F] to-[#AF1B31] bg-clip-text text-transparent mb-6 tracking-wide">
                        About VitalPlasma
                    </h1>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
                        VitalPlasma is committed to providing life-saving treatments while offering individuals the opportunity to make a meaningful difference in their communities.
                    </p>
                </motion.div>

                {/* Glassmorphism Card: Who We Are */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-12"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FA812F]/40 to-[#AF1B31]/40 blur-xl opacity-25 -z-10" />

                    <div className="flex flex-col md:flex-row gap-12">
                        <div className="space-y-6 flex-1">
                            <h2 className="text-3xl font-serif font-semibold bg-gradient-to-r from-[#FA812F] to-[#AF1B31] bg-clip-text text-transparent">
                                Who We Are
                            </h2>
                            <p className="text-gray-700 leading-relaxed tracking-wide">
                                We are a dedicated platform connecting plasma donors with those in need. Through safe, trusted, and rewarding donation processes, we’re transforming lives.
                            </p>
                        </div>

                        <div className="space-y-6 flex-1">
                            <h2 className="text-3xl font-serif font-semibold bg-gradient-to-r from-[#FA812F] to-[#AF1B31] bg-clip-text text-transparent">
                                Our Mission
                            </h2>
                            <p className="text-gray-700 leading-relaxed tracking-wide">
                                Our mission is to empower individuals to make a life-saving difference by donating plasma. We believe in fostering community engagement and rewarding our donors.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Impact Section with Icons */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 mt-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        <Users className="w-8 h-8 text-[#FA812F]" />
                        <h3 className="text-xl font-semibold text-gray-900">Community-Focused</h3>
                        <p className="text-gray-700 leading-relaxed tracking-wide">
                            By donating plasma, you become part of a larger community, contributing to life-saving treatments and creating a stronger world.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        <Heart className="w-8 h-8 text-[#FA812F]" />
                        <h3 className="text-xl font-semibold text-gray-900">Life-Saving Contributions</h3>
                        <p className="text-gray-700 leading-relaxed tracking-wide">
                            Plasma donations are critical to the creation of life-saving treatments for individuals worldwide. Your contribution saves lives.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg"
                    >
                        <ShieldCheck className="w-8 h-8 text-[#FA812F]" />
                        <h3 className="text-xl font-semibold text-gray-900">Trust & Safety</h3>
                        <p className="text-gray-700 leading-relaxed tracking-wide">
                            Our processes are built with the utmost attention to safety, ensuring that every donation is both effective and secure for the donor.
                        </p>
                    </motion.div>
                </div>

                {/* Call to Action Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-[#FA812F] to-[#AF1B31] p-16 rounded-xl shadow-lg">
                        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mb-4">
                            Join Us and Make an Impact Today
                        </h2>
                        <p className="text-lg text-white mb-6">
                            Start your donation journey with us and make a meaningful difference in the lives of those in need.
                        </p>
                        <a
                            href="/appointment"
                            className="inline-block bg-white text-[#AF1B31] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            Schedule Your Appointment
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
