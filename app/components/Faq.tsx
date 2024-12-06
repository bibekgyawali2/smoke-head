
import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const Faq = () => {
    const faqItems = [
        {
            question: "How long does a vape coil last?",
            answer: "On average, vape coils last between 1 to 3 weeks, depending on how often you vape and the type of e-liquid you use. Sweet e-liquids tend to wear coils out faster due to caramelization.",
        },
        {
            question: "What is the difference between VG and PG in e-liquid?",
            answer: "VG (Vegetable Glycerin) provides a smoother hit and denser vapor, while PG (Propylene Glycol) offers a stronger throat hit and better flavor delivery.",
        },
        {
            question: "Do e-cigars contain nicotine?",
            answer: "Most e-cigars do contain nicotine, but there are nicotine-free options available as well.",
        },
        {
            question: "Can I mix CBD with regular e-liquid?",
            answer: "Yes, you can mix CBD with regular e-liquid, but make sure to use a compatible device and mix it evenly for consistent results.",
        },
    ];

    return (
        <div className="bg-neutral-900  text-white h-screen flex items-center justify-center p-6 bg-[url('/images/hero.jpeg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="container mx-auto px-6 md:px-12 grid grid-cols-3 gap-52">
                {/* Title Section - Left Column */}
                <div className="col-span-1 self-start">
                    <h2 className="text-3xl md:text-5xl font-bold">FAQ's</h2>
                    <p className="text-2xl text-neutral-400 pt-5">
                        Some pre-questions and answers to help you understand better.
                    </p>
                </div>

                {/* Accordion Section - Right Column */}
                <div className="col-span-2">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqItems.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-2xl font-semibold hover:text-orange-400 hover:font-semibold ">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-neutral-400 mt-2 text-2xl">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Faq;