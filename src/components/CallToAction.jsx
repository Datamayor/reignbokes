import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-border"
        >
          <div className="absolute inset-0 blue-gradient-bg opacity-80"></div>
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8 md:p-16">
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                <Gift size={16} className="text-white" />
                <span className="text-sm font-medium">Special Occasions & Corporate Gifting</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                Create Unforgettable Moments with <span className="text-yellow-300">Reign Boxes</span>
              </h2>
              
              <p className="text-white/90">
                Whether it's a corporate event, client appreciation, employee recognition, or any special occasion, our premium gift boxes and catering services will make it truly memorable.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group bg-background text-accent hover:bg-background/90">
                  Explore Our Boxes
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                  Contact Us
                </Button>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="aspect-square max-w-md mx-auto">
                <img  alt="Stack of beautifully wrapped Reign Boxes" className="w-full h-full object-cover rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1618914241432-5043b1b4acf5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;