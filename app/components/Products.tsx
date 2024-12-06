"use client";
import Cards from "@/components/ui/cards";

const products = [
    {
        name: "Vapes",
        description: "A variety of vaping products.",
        image: "/images/vape.jpg",
    },
    {
        name: "Cigar",
        description: "Premium cigars for connoisseurs.",
        image: "/images/cigar.jpg",
    },
    {
        name: "Hookah",
        description: "Luxurious hookah pipes and flavors.",
        image: "/images/hookah.jpg",
    },
    {
        name: "Vaporizer",
        description: "Advanced vaporizers for smooth experiences.",
        image: "/images/vaporizer.jpg",
    },

];

const ProductCategorySection = () => {
    return (
        <section id="product-section" className="h-screen bg-neutral-900 text-white flex lg:pt-44">
            <div className="container mx-auto px-6 md:px-12">
                <div className="space-y-6">
                    <p className="text-lg font-semibold uppercase tracking-wide text-gray-400">
                        What We Offer
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold">Categories</h2>
                    <a
                        href="/allproducts"
                        className="inline-block text-sm text-orange-400 hover:underline"
                    >
                        See All Products &rarr;
                    </a>
                </div>
                <div className="pt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <Cards
                            key={index}
                            name={product.name}
                            image={product.image}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategorySection;
