"use client"
import { useEffect, useState } from "react"
import Hero from "@/components/layout/Hero"
import Navbar from "@/components/layout/Navbar"
import Activities from "@/components/layout/Activities"
import About from "@/components/layout/About"
import Footer from "@/components/layout/Footer"
import FAQs from "@/components/layout/FAQs"
import Team from "@/components/layout/Team"

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
    
        return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      { isMobile ? (
        <>
        <Activities/>
        <About />
        <FAQs />
        <Team />
        <Footer />
        </>
      ) : null}
      
    </>
  );
}
