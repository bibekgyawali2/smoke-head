"use client";
import { Button } from '@/components/ui/button';
import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import React from 'react';

const navbarItems = [
    { label: 'HOME', href: '/' },
    { label: 'OUR PRODUCTS', href: '#product-section' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' },
    { label: 'BLOGS', href: '/blogs' },
];

const Navbar = () => {
    return (
        <nav className="sticky  top-0 left-0 right-0 z-40  shadow-md">
            <div className=" pt-4 md:px-16 pb-6 flex items-center justify-between transition duration-500 ">
                {/* Left Section with Brand and Button */}
                <div className="flex items-center gap-6">
                    <div className="font-extrabold text-4xl cursor-pointer">
                        <span className="text-orange-600">V</span>
                        <span>APOR </span>
                        <span className="text-orange-600">H</span>
                        <span>EAVEN</span>
                    </div>
                    {navbarItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="cursor-pointer hover:text-orange-500 font-semibold"
                        >
                            {item.label}
                        </a>
                    ))}

                </div>

                <div className="flex-row  hidden lg:flex font-semibold">
                    {/* Button */}
                    <Button variant="outline"
                        className="  text-lg font-medium text-white bg-transparent border  border-indigo-700 rounded-lg  shadow-lg transition-all hover:bg-gray-950 hover:border-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Cart
                        <ShoppingCartIcon />
                    </Button>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;
