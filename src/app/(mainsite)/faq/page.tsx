'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = {
    question: string;
    answer: string;
};

const faqs: FAQ[] = [
    {
        question: 'Who can donate plasma?',
        answer:
            'Most healthy adults between the ages of 18 and 65 who meet eligibility criteria can donate plasma.',
    },
    {
        question: 'How long does the donation take?',
        answer:
            'A typical plasma donation takes about 60 to 90 minutes, including screening and recovery.',
    },
    {
        question: 'Is plasma donation safe?',
        answer:
            'Yes, it is a safe and FDA-regulated process. We use sterile, single-use equipment to ensure safety.',
    },
    {
        question: 'How often can I donate plasma?',
        answer:
            'You can donate plasma up to twice per week, with at least 48 hours between donations.',
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="min-h-screen bg-white px-6 py-16 md:px-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FA812F] to-[#AF1B31] text-center">
                    Frequently Asked Questions
                </h1>

                <p className="text-gray-600 mt-4 text-center text-lg max-w-2xl mx-auto">
                    Everything you need to know before donating plasma.
                </p>

                <div className="mt-12 divide-y divide-gray-200 rounded-lg border border-gray-100 shadow-sm">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="px-6 py-5 cursor-pointer transition-all duration-300 hover:bg-gray-50"
                            onClick={() => toggle(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium text-gray-900">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`h-5 w-5 text-[#AF1B31] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </div>
                            {openIndex === index && (
                                <p className="mt-3 text-sm text-gray-700">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
