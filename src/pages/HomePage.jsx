import React from "react";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs";
import GiftBoxes from "@/components/GiftBoxes";
import ReignBites from "@/components/ReignBites";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";

const HomePage = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <WhyChooseUs />
      <GiftBoxes />
      <ReignBites />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage;