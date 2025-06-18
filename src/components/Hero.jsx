import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-border">
              <Star size={16} className="text-primary fill-primary" />
              <span className="text-sm font-medium text-foreground">Premium Gifting Experience</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Exquisite <span className="gold-gradient-text">Gift Boxes</span> for Every Occasion
            </h1>
            
            <p className="text-lg text-muted-foreground md:pr-10">
              From thoughtful snack boxes to luxurious platinum collections, Reign Boxes crafts premium gifting experiences that leave lasting impressions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
                Explore Our Boxes
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Discover Reign Bites
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <img  alt="Happy customer 1" class="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1598911642263-b81130ed8ce8" />
                <img  alt="Happy customer 2" class="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1673314188100-11f4bd2ebc2b" />
                <img  alt="Happy customer 3" class="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1678280154590-bb3db02eb596" />
                <img  alt="Happy customer 4" class="w-10 h-10 rounded-full border-2 border-background object-cover" src="https://images.unsplash.com/photo-1649767590910-367f54f3d0e3" />
              </div>
              <div>
                <p className="font-medium text-foreground">Trusted by 1,000+ happy customers</p>
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/50 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/50 rounded-full"></div>
              
              <div className="relative h-full w-full rounded-2xl overflow-hidden border-8 border-background/90 shadow-2xl">
                <img  alt="Elegant gift box overflowing with treats" class="w-full h-full object-cover" src="https://images.unsplash.com/photo-1671567703018-5ed90cf29935" />
              </div>
              
              <div className="absolute -bottom-5 -right-5 bg-background rounded-lg shadow-lg p-4 flex items-center gap-3 border border-border">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Gift size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm text-foreground">Premium Quality</p>
                  <p className="text-xs text-muted-foreground">Handcrafted with care</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;