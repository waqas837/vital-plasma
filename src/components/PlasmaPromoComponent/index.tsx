import React from "react";

export default function PlasmaPromoComponent() {
    return (
        <section className="relative bg-gradient-to-b from-white to-[#FA812F] overflow-hidden py-20 px-6 sm:px-12 lg:px-24">
            {/* Elegant Background Shapes */}
            <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-[#FA812F] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10rem] right-[-10rem] w-[30rem] h-[30rem] bg-[#FA812F] opacity-20 rounded-full blur-3xl"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                    The More You <span className="italic text-[#D71F3A]">Give</span>, the More You <span className="italic text-[#FA812F]">Earn</span>
                </h2>
                <p className="mt-6 text-lg md:text-xl text-gray-600">
                    Earn money for every plasma donation and unlock bonuses as you go.
                </p>

                {/* Promotional Badge */}
                <div className="mt-8 inline-block bg-gradient-to-r from-[#FA812F] to-[#AF1B31] text-white px-8 py-4 rounded-2xl shadow-xl text-lg font-semibold transform -rotate-1">
                    New Donors Can Earn More Than $700!
                </div>

                {/* Call to Action Buttons */}
                <div className="mt-10 flex justify-center gap-6 flex-wrap">
                    <button className="bg-[#FA812F] text-white px-8 py-3 rounded-xl text-base font-medium shadow-md hover:bg-[#AF1B31] transition-all duration-300 transform hover:scale-105">
                        Schedule an Appointment
                    </button>
                    <a
                        href="/login"
                        className="text-white text-base font-medium hover:underline hover:text-[#AF1B31] transition-colors duration-300"
                    >
                        Log in or create an account
                    </a>
                </div>
            </div>
        </section>
    );
}
