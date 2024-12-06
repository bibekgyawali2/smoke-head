"use client"

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { ProductsCard } from '../components/ProductsCard';
import { Input } from '@/components/ui/input';

const products = [
    {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    },
    {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    }, {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    }, {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    }, {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    }, {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    }, {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    }, {
        imageSrc: "/images/vape.jpg",
        altText: "Vape",
        title: "Air Jordan 4 Retro Reimagined",
        description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday.",
        price: 100,
    },


];

const AllProducts = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <>
            <Navbar />


            <div className="h-screen bg-neutral-900 text-white flex lg:pt-16 flex-wrap justify-start px-14">

                {products.map((product, index) => (
                    <div key={index} className="m-4">
                        <ProductsCard
                            imageSrc={product.imageSrc}
                            altText={product.altText}
                            title={product.title}
                            description={product.description}
                            price={product.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default AllProducts;
