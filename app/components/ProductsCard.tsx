"use client";
import React from "react";
import { BackgroundGradient } from "../components/ui/background-gradient";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductProps {
    imageSrc: string;
    altText: string;
    title: string;
    description: string;
    price: number;
}

export function ProductsCard({ imageSrc, altText, title, description, price }: ProductProps) {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] max-w-80 px-5  pb-8 pt-4 bg-white dark:bg-zinc-900" >
                <Image
                    src={imageSrc}
                    alt={altText}
                    height="280"
                    width="280"
                    className="object-cover"
                />
                <div className="mt-4">
                    <p className="text-base sm:text-lg text-black dark:text-neutral-200 font-medium">
                        {title}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
                        {description}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button className="rounded-full px-4 py-1 text-white bg-black text-sm font-bold dark:bg-zinc-800">
                        ${price}
                    </button>
                    <Button variant={"outline"} className="text-sm">Add to Cart</Button>
                </div>
            </BackgroundGradient>
        </div>
    );
}
