"use client"
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const DonationFeatures = () => {
    const [activeFeature, setActiveFeature] = useState(0);

    // Auto rotate through features
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveFeature((prev) => (prev + 1) % features.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const features = [
        {
            id: 1,
            title: "Convenient Scheduling",
            description: "Book appointments that fit your schedule with our easy-to-use online system.",
            image: "/api/placeholder/500/300",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: "Professional Staff",
            description: "Our trained medical professionals ensure your comfort and safety throughout the process.",
            image: "/api/placeholder/500/300",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: "Immediate Payment",
            description: "Receive your compensation immediately after your donation is complete.",
            image: "/api/placeholder/500/300",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="relative w-full overflow-hidden bg-white py-16 md:py-24">
            {/* Background elements */}
            <div className="absolute overflow-hidden opacity-10">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#FA812F]"></div>
                <div className="absolute bottom-32 -left-20 h-40 w-40 rounded-full bg-[#FA812F]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold text-[#FA812F] md:text-4xl lg:text-5xl">
                        Why Donate With Us
                    </h2>
                    <p className="mx-auto max-w-2xl text-[#FA812F]/80">
                        We provide the best donation experience with modern facilities and a caring team.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16">
                    {/* Feature selector */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="flex flex-col space-y-6"
                    >
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className={`cursor-pointer rounded-xl border-2 p-6 transition-all duration-300 ${activeFeature === index
                                        ? "border-[#FA812F] bg-[#FA812F]/5 shadow-lg"
                                        : "border-gray-100 bg-white hover:border-[#FA812F]/30"
                                    }`}
                                onClick={() => setActiveFeature(index)}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`rounded-full p-2 ${activeFeature === index ? "bg-[#FA812F] text-white" : "bg-[#FA812F]/10 text-[#FA812F]"
                                            }`}
                                    >
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold text-[#FA812F]">{feature.title}</h3>
                                        <p className="text-[#FA812F]/80">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Feature image */}
                    <motion.div
                        key={activeFeature}
                        initial="hidden"
                        animate="visible"
                        variants={imageVariants}
                        className="relative h-64 overflow-hidden rounded-2xl shadow-xl md:h-96"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FA812F]/20 to-[#FA812F]/5"></div>
                        <img
                            src={features[activeFeature].image}
                            alt={features[activeFeature].title}
                            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <h3 className="text-xl font-bold text-white">{features[activeFeature].title}</h3>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 text-center"
                >
                    <a
                        href="#schedule"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#FA812F] to-[#E86B1C] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:shadow-[#FA812F]/30"
                    >
                        Schedule Your Donation
                        <svg
                            className="ml-2 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default DonationFeatures;