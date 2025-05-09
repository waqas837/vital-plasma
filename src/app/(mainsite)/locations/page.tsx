'use client';

import { motion } from 'framer-motion';

const LOCATIONS = [
    {
        name: "VitalPlasma – Downtown Center",
        address: "123 Main St, New York, NY",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9492566668945!2d-74.006015!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMzDCsDQyJzQ2LjAiTiA3NMKwMDAnMTYuMCJX!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus",
    },
    {
        name: "VitalPlasma – Brooklyn",
        address: "456 Flatbush Ave, Brooklyn, NY",
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.888888888888!2d-73.9442!3d40.6782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNDDCsDQwJzQxLjUiTiA3M8KwNTYnMzguOSJX!5e0!3m2!1sen!2sus!4v1710000000001!5m2!1sen!2sus",
    },
];

export default function LocationsPage() {
    return (
        <section className="bg-gray-50 py-20 px-6 min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold text-center text-[#AF1B31] mb-12"
            >
                Our Donation Locations
            </motion.h1>

            <div className="grid gap-12 max-w-6xl mx-auto md:grid-cols-2">
                {LOCATIONS.map((loc, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200"
                    >
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-[#FA812F] mb-2">{loc.name}</h2>
                            <p className="text-gray-600">{loc.address}</p>
                        </div>
                        <iframe
                            src={loc.mapEmbedUrl}
                            width="100%"
                            height="300"
                            loading="lazy"
                            allowFullScreen
                            className="border-t border-gray-200"
                        ></iframe>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
