import { Button } from '@/components/ui/button'
import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div className="bg-neutral-900  text-white h-screen flex items-center justify-center p-6 bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-fixed bg-cover ">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-3 ">
                    {/* Title Section - Left Column */}
                    <div className="col-span-1 self-start">
                        <p className="text-lg font-semibold uppercase tracking-wide text-gray-400">
                            Get in Touch
                        </p>
                        <h2 className="text-3xl md:text-5xl font-bold">Contact Us</h2>
                        <div className="space-y-6 pt-10 font-bold text-xl">
                            <div className="flex items-center space-x-4 pt-6">
                                <span className=" text-2xl">📞</span>
                                <p>+18173933498</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className=" text-2xl">📧</span>
                                <p>5609 N Tarrant Pkwy, Fort Worth, TX 76244, United States</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <span className=" text-2xl">📍</span>
                                <p>50 Wall Street Suite, 44150 Ohio, United States</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Us Section - Right Column */}
                    <div className="col-span-2 ">
                        <div>
                            <form className="space-y-6 bg-neutral-900 bg-opacity-80 p-12 mx-40 rounded-xl ">
                                <div className="grid grid-cols-1 md:grid-cols-2  ">
                                    <div>
                                        <label className="block text-sm mb-1 " htmlFor="fullName">
                                            Full Name*
                                        </label>
                                        <input
                                            id="fullName"
                                            type="text"
                                            className="w-full border border-neutral-700 bg-opacity-35 bg-neutral-800 p-3 rounded-md text-sm focus:ring-orange-400 focus:border-orange-400"
                                            placeholder="Your full name"
                                            required
                                        />
                                        <p className="text-xs text-red-500 mt-1 hidden">The name field is required.</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1" htmlFor="email">
                                            Email*
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="w-full border border-neutral-700 bg-neutral-800 bg-opacity-35 p-3 rounded-md text-sm focus:ring-orange-400 focus:border-orange-400"
                                            placeholder="Your email address"
                                            required
                                        />
                                        <p className="text-xs text-red-500 mt-1 hidden">The email field is required.</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-1" htmlFor="projectType">
                                            Project Type*
                                        </label>
                                        <input
                                            id="projectType"
                                            type="text"
                                            className="w-full border border-neutral-700 bg-neutral-800 bg-opacity-35 p-3 rounded-md text-sm focus:ring-orange-400 focus:border-orange-400"
                                            placeholder="Type of your project"
                                            required
                                        />
                                        <p className="text-xs text-red-500 mt-1 hidden">The project type field is required.</p>
                                    </div>
                                    <div>
                                        <label className="block text-sm mb-1" htmlFor="mobile">
                                            Mobile*
                                        </label>
                                        <input
                                            id="mobile"
                                            type="text"
                                            className="w-full border border-neutral-700 bg-neutral-800  bg-opacity-35 p-3 rounded-md text-sm focus:ring-orange-400 focus:border-orange-400"
                                            placeholder="Your mobile number"
                                            required
                                        />
                                        <p className="text-xs text-red-500 mt-1 hidden">The mobile number field is required.</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm mb-1" htmlFor="message">
                                        Message*
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        className="w-full border border-neutral-700 bg-neutral-800  bg-opacity-35 p-3 rounded-sm text-sm focus:ring-orange-400 focus:border-orange-400"
                                        placeholder="Your message"
                                        required
                                    ></textarea>
                                    <p className="text-xs text-red-500 mt-1 hidden">The message field is required.</p>
                                </div>
                                <Button variant="outline"
                                    className="  text-lg font-medium text-white bg-transparent border p-6  border-indigo-700 rounded-lg  shadow-lg transition-all hover:bg-gray-950 hover:border-gray-800 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                                    Send Message
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs