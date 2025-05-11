'use client';

import { useState } from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';
import Link from 'next/link';

const PRIMARY_COLOR = '#D7442E';

export default function ContactUsPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (send email, save data, etc.)
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen bg-transparent p-6 font-sans">
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

                {/* Contact Form Card */}
                <div className="relative rounded-2xl p-8">
                    {/* Content */}
                    <div className="relative z-10 text-[#D7442E]">
                        <h1 className="text-4xl font-serif font-semibold tracking-tight mb-2">Contact Us</h1>
                        <p className="text-sm opacity-80 mb-6">We’d love to hear from you! Please fill out the form below, and we’ll get back to you as soon as possible.</p>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="w-full sm:w-1/2 bg-transparent border border-[#D7442E] rounded-md p-3 text-sm text-[#D7442E] placeholder-[#D7442E]/60 focus:outline-none focus:ring-2 focus:ring-[#D7442E] transition-all"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Your Email"
                                    className="w-full sm:w-1/2 bg-transparent border border-[#D7442E] rounded-md p-3 text-sm text-[#D7442E] placeholder-[#D7442E]/60 focus:outline-none focus:ring-2 focus:ring-[#D7442E] transition-all"
                                />
                            </div>

                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Your Message"
                                className="w-full bg-transparent border border-[#D7442E] rounded-md p-3 text-sm text-[#D7442E] placeholder-[#D7442E]/60 focus:outline-none focus:ring-2 focus:ring-[#D7442E] transition-all"
                                rows={5}
                            />

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#FA812F] to-[#AF1B31] py-3 rounded-md font-medium hover:scale-105 transition-all text-white"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center text-sm opacity-80 mt-12">
                    <div className="flex justify-center gap-6">
                        <div className="flex items-center gap-2 text-[#D7442E]">
                            <MapPin size={18} />
                            <span>4490 E New York St, Aurora IL 60504</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#D7442E]">
                            <Phone size={18} />
                            <span>847-260-2668</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Link href="/" className="text-[#D7442E] hover:underline">Back to Home</Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}
