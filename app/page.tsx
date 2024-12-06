import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import ContactUs from "./components/ContactUs";
import ChooseUs from "./components/ChooseUs";

export default function Home() {
  return (
    <div className=" ">
      <Navbar />
      <HeroSection />
      <Products />
      <ChooseUs />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}
