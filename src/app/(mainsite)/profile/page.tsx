'use client';

import { useState } from 'react';
import {
    LogOut,
    Key,
    CalendarDays,
    Info,
    Phone,
    DollarSign,
    Briefcase,
} from 'lucide-react';
import Link from 'next/link';

const PRIMARY_COLOR = '#D7442E';

export default function ProfilePage() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="min-h-screen p-6 font-sans bg-transparent">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Header */}
                <header className="flex items-center justify-between" style={{ color: PRIMARY_COLOR }}>
                    <div className="text-3xl font-serif tracking-wide">Vital Plasma</div>
                    <nav className="space-x-6 text-sm font-light">
                        <Link href="/" className="hover:underline">Home</Link>
                        <Link href="/appointment" className="hover:underline">Schedule Appointment</Link>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
                        <Link href="/faqs" className="hover:underline">FAQs</Link>
                    </nav>
                </header>

                {/* Glass Card */}
                <div className="relative rounded-2xl border border-white/20 backdrop-blur-md overflow-hidden shadow-2xl p-8">
                    {/* Gradient Tint Layer */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FA812F]/20 to-[#AF1B31]/20 z-0" />

                    {/* Content */}
                    <div className="relative z-10" style={{ color: PRIMARY_COLOR }}>
                        <h1 className="text-4xl font-serif font-semibold tracking-tight mb-2">Welcome, Khan</h1>
                        <p className="text-sm opacity-80 mb-6">Lives depend on plasma therapies. Become a donor and get paid.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                            <Card
                                title="Schedule Appointment"
                                description="Book your plasma donation visit"
                                href="/appointment"
                                icon={<CalendarDays size={28} />}
                            />
                            <Card
                                title="Change Password"
                                description="Secure your account"
                                onClick={() => setShowModal(true)}
                                icon={<Key size={28} />}
                            />
                            <Card
                                title="The Donation Process"
                                description="How plasma donation works"
                                href="/donation-process"
                                icon={<Info size={28} />}
                            />
                            <Card
                                title="Ways to Earn"
                                description="See our reward programs"
                                href="/get-paid"
                                icon={<DollarSign size={28} />}
                            />
                            <Card
                                title="Contact Us"
                                description="Reach out for support"
                                href="/contact"
                                icon={<Phone size={28} />}
                            />
                             <Card
                                title="My Appointments"
                                description="You can see here all submitted appointments"
                                href="/profile/appointments"
                                icon={<Briefcase size={28} />}
                            />
                        </div>

                        <div className="mt-10 flex justify-between items-center text-sm opacity-80 border-t border-white/20 pt-4">
                            <div>
                                <p>4490 E New York St, Aurora IL 60504</p>
                                <p>847-260-2668</p>
                            </div>
                            <button className="flex items-center gap-2 hover:scale-105 transition-transform">
                                <LogOut size={18} />
                                Log out
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center opacity-70 text-xs" style={{ color: PRIMARY_COLOR }}>
                    &copy; 2025 Vital Plasma
                </footer>
            </div>

            {/* Modal: Change Password */}
            {showModal && (
                <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
                    <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 max-w-sm w-full relative shadow-xl overflow-hidden">
                        {/* Gradient Tint */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FA812F]/20 to-[#AF1B31]/20 z-0" />
                        <div className="relative z-10" style={{ color: PRIMARY_COLOR }}>
                            <h3 className="text-lg font-semibold mb-4">Change Password</h3>
                            <form className="space-y-4">
                                <input
                                    type="password"
                                    placeholder="Current password"
                                    className="w-full bg-white/10 border border-white/20 rounded-md p-2 text-sm text-[#D7442E] placeholder-white/60 focus:outline-none focus:ring focus:ring-white/30"
                                />
                                <input
                                    type="password"
                                    placeholder="New password"
                                    className="w-full bg-white/10 border border-white/20 rounded-md p-2 text-sm text-[#D7442E] placeholder-white/60 focus:outline-none focus:ring focus:ring-white/30"
                                />
                                <button
                                    type="submit"
                                    className="w-full mt-2 bg-gradient-to-r from-[#FA812F] to-[#AF1B31] py-2 rounded-md font-medium hover:scale-105 transition-transform text-white"
                                >
                                    Save
                                </button>
                            </form>
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-2 right-2 hover:opacity-70"
                            >
                                ✕
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

// Reusable Card Component
function Card({
    title,
    description,
    icon,
    href,
    onClick,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    href?: string;
    onClick?: () => void;
}) {
    const content = (
        <div className="group relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 transition-all duration-300 shadow-inner hover:shadow-lg hover:scale-[1.02] cursor-pointer overflow-hidden">
            {/* Gradient tint */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FA812F]/10 to-[#AF1B31]/10 z-0" />
            <div className="relative z-10 text-[#D7442E]">
                <div className="flex items-center gap-4 mb-3">
                    <div className="text-[#D7442E]">{icon}</div>
                    <h2 className="font-medium text-lg tracking-tight">{title}</h2>
                </div>
                <p className="opacity-80 text-sm">{description}</p>
            </div>
        </div>
    );

    return href ? (
        <Link href={href}>{content}</Link>
    ) : (
        <div onClick={onClick}>{content}</div>
    );
}
