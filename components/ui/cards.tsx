import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
    name: string;
    image: string;
    description?: string;
}

const Cards: React.FC<CardProps> = ({ name, image, description }) => {
    return (
        <div className="max-w-xs w-full group/card">
            <div
                className={cn(
                    "cursor-pointer overflow-hidden relative card h-96 rounded-3xl shadow-xl max-w-sm mx-auto backgroundImage flex flex-col p-4",
                    "bg-cover",
                    "group-hover:shadow-lg group-hover:shadow-blue-500 hover:shadow-indigo-500 shadow-sm"
                )}
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-30   "></div>
                <div className="flex flex-col justify-end h-full z-10">
                    <div className="text content ">
                        <h1 className="font-bold text-xl md:text-2xl  text-gray-50">
                            {name}
                        </h1>
                        {description && (
                            <p className="font-normal text-sm text-gray-200 ">{description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;