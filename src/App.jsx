import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import CartPage from "@/pages/CartPage";
import CorporateGiftingPage from "@/pages/CorporateGiftingPage";
import PersonalGiftingPage from "@/pages/PersonalGiftingPage";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.title = "Reign Boxes | Premium Gift Boxes & Catering";
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/corporate-gifting" element={<CorporateGiftingPage />} />
          <Route path="/personal-gifting" element={<PersonalGiftingPage />} />
        </Routes>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;