"use client"
import { motion } from "framer-motion";
import { Heart, Stethoscope, DollarSign } from "lucide-react"; // Importing the Lucide icons
import React from "react";

const benefits = [
    {
        title: "❤️ Help Others",
        description: "Save lives with your donation and make a difference in the world.",
        icon: <Heart />,
    },
    {
        title: "🩺 Free Checkup",
        description: "Get a free basic health screening with every donation.",
        icon: <Stethoscope />,
    },
    {
        title: "💵 Get Paid",
        description: "$60 for each donation. Earn money while helping others.",
        icon: <DollarSign />,
    },
];

const WhyDonateSection = () => {
    // Animation variant for the benefits cards
    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.3,
                duration: 0.8,
            },
        },
    };

    return (
        <div className="bg-gradient-to-br from-[#FA812F] to-[#FA812F] py-16 px-4 md:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                className="text-center max-w-4xl mx-auto mb-12"
            >
                <motion.h2
                    variants={cardVariant}
                    className="text-3xl font-bold text-white md:text-4xl"
                >
                    Why Donate?
                </motion.h2>
                <motion.p
                    variants={cardVariant}
                    className="text-lg text-white mt-4 md:text-xl"
                >
                    Your donation makes a huge impact! Here are some reasons why you should consider donating today.
                </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                {benefits.map((benefit, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariant}
                        className="flex flex-col items-center gap-6 rounded-3xl bg-white shadow-lg p-8 md:p-10 backdrop-blur-md"
                    >
                        {/* Icon */}
                        <div className="h-24 w-24 bg-[#FA812F] rounded-full flex items-center justify-center shadow-xl">
                            {React.cloneElement(benefit.icon, { className: "w-12 h-12 text-white" })}
                        </div>

                        {/* Title */}
                        <motion.h3
                            variants={cardVariant}
                            className="text-xl font-semibold text-[#FA812F]"
                        >
                            {benefit.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            variants={cardVariant}
                            className="text-center text-[#FA812F]"
                        >
                            {benefit.description}
                        </motion.p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyDonateSection;
