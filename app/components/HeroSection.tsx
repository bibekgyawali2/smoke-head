import React from "react";
import Navbar from "./Navbar";
import { BackgroundLines } from "./ui/background-lines";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section id="home" className="relative h-screen text-white bg-gray-900 overflow-hidden">
            <BackgroundLines>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Elevate Your Smoking Experience
                    </h1>
                    <p className="mt-4 text-lg md:text-xl max-w-xl">
                        Discover premium smoking products crafted for connoisseurs.
                        Quality, style, and sophistication—all in one place.
                    </p>

                    <Button asChild

                        variant="outline"
                        className="my-4 px-6 py-7 text-lg font-medium text-white bg-transparent border  border-indigo-700 rounded-full shadow-lg transition-all hover:bg-gray-950 hover:border-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        <Link href="#product-section">Explore Products</Link>
                    </Button>

                </div>
            </BackgroundLines>
        </section>
    );
};

export default HeroSection;
