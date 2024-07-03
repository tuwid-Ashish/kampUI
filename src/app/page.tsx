import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-black/[0.96] bg-white">
      <Navbar/>
      <HeroSection/>
      <WhyChooseUs/>
    </main>
  );
}
