import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social media icons

const Footer = () => {
    return (
        <footer className=" text-white py-12">
            <div className="container mx-auto px-6 md:px-12 text-center">
                {/* Footer Title */}
                <h2 className="text-3xl font-semibold mb-4">Stay Connected</h2>

                {/* Social Media Links */}
                <div className="flex justify-center gap-8 mb-6">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-3xl hover:text-orange-500 transition duration-300" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-3xl hover:text-orange-500 transition duration-300" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl hover:text-orange-500 transition duration-300" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-orange-500 transition duration-300" />
                    </a>
                </div>

                {/* Footer Links */}
                <div className="flex justify-center gap-8 mb-8 text-lg font-medium">
                    <a href="#home" className="hover:text-orange-500">Home</a>
                    <a href="#products" className="hover:text-orange-500">Our Products</a>
                    <a href="#about" className="hover:text-orange-500">About</a>
                    <a href="#contact" className="hover:text-orange-500">Contact</a>
                    <a href="#blogs" className="hover:text-orange-500">Blogs</a>
                </div>

                {/* Copyright */}
                <p className="text-sm">
                    &copy; 2024 Smokey&apos;s Paradise. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
