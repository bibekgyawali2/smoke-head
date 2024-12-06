import React from "react";

const features = [
    {
        title: "Fast Service",
        description:
            "We are just a call away.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-color-swatch"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
                <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
                <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
                <line x1="17" y1="17" x2="17" y2="17.01"></line>
            </svg>
        ),
    },
    {
        title: "Experienced Team",
        description:
            "We build our templates for speed in mind, for super-fast load times so your customers never waver.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bolt"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="13 3 13 10 19 10 11 21 11 14 5 14 13 3"></polyline>
            </svg>
        ),
    },
    {
        title: "Wide Varirty",
        description:
            "Everything you need to succeed and launch your landing page, right out of the box. No need to install anything else.",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-tools"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5"></line>
                <polyline points="12 8 7 3 3 7 8 12"></polyline>
                <line x1="7" y1="8" x2="5.5" y2="9.5"></line>
                <polyline points="16 12 21 17 17 21 12 16"></polyline>
                <line x1="16" y1="17" x2="14.5" y2="18.5"></line>
            </svg>
        ),
    },
];

const ChooseUs = () => {
    return (
        <div className="bg-black h-screen p-6 lg:pt-44 mx-auto bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <section
                id="features"
                className=""
            >
                {/* Header Section */}
                <div className="relative mx-auto   px-12 container space-y-6">
                    <span className="text-lg font-semibold uppercase tracking-wide text-gray-400">
                        Vapour Heaven
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Why Choose Us
                    </h2>

                </div>

                {/* Features Section */}
                <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="rounded-md border border-neutral-800 bg-neutral-900/50 p-8 text-center shadow"
                        >
                            <div
                                className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(rgb(249, 115, 22) 0%, rgb(234, 88, 12) 100%)",
                                    borderColor: "rgb(245, 158, 11)",
                                }}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="mt-6 text-orange-400">{feature.title}</h3>
                            <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ChooseUs;
