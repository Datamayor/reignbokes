import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Gift, Smile, Heart, Cake, Send, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PersonalGiftingPage = () => {
  const scenarios = [
    { icon: <Cake size={24} className="text-primary" />, title: "Birthdays & Celebrations", description: "Make someone's special day even brighter with a beautifully curated gift box filled with joy." },
    { icon: <Heart size={24} className="text-primary" />, title: "Faith-Based & Thoughtful Gifts", description: "Express your care and support with gifts that align with values and offer comfort or inspiration." },
    { icon: <Smile size={24} className="text-primary" />, title: "Get Well Soon Boxes", description: "Send a little sunshine and comfort to someone recovering, with uplifting treats and wellness items." },
    { icon: <Star size={24} className="text-primary" />, title: "Just Because & Thank You", description: "Sometimes the best gifts are unexpected. Show appreciation or simply brighten someone's day." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12"
    >
      <header className="text-center mb-16">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block p-4 bg-primary/10 rounded-full mb-6"
        >
          <Gift size={48} className="text-primary" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
        >
          Personal Gifting Made <span className="gold-gradient-text">Effortless</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          For busy professionals and thoughtful gifters, Reign Boxes makes it easy to send something meaningful—quickly and beautifully. Not every great gift needs weeks of planning.
        </motion.p>
      </header>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
           <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6 md:order-2"
          >
            <h2 className="text-3xl font-bold text-foreground">Thoughtful Gifts, Simplified</h2>
            <p className="text-muted-foreground">
              Life gets busy, but that doesn't mean you can't send a heartfelt gift. Reign Boxes offers a curated selection of premium gift boxes perfect for any personal occasion. 
            </p>
            <p className="text-muted-foreground">
              From celebrating milestones to offering comfort, our boxes are designed to convey your sentiments with elegance and care. Choose from our ready-to-send options or let us help you personalize the perfect gesture.
            </p>
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Link to="/#gift-boxes">
                Explore Gift Boxes <Send size={18} className="ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="md:order-1"
          >
            <img  alt="Person happily receiving a gift box" className="rounded-xl shadow-xl w-full h-auto object-cover" src="https://plus.unsplash.com/premium_photo-1711226107481-54e74a609f53?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Perfect for Every Occasion
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
              className="flex"
            >
              <div className="bg-card p-6 rounded-xl shadow-lg card-hover border-border text-card-foreground flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  {scenario.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{scenario.title}</h3>
                <p className="text-sm text-muted-foreground">{scenario.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center py-12 bg-secondary/30 rounded-xl border border-border"
      >
        <h2 className="text-3xl font-bold mb-4 text-foreground">Find the Perfect Gift Today</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Browse our collection and discover the ideal Reign Box to make someone's day extraordinary.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/#gift-boxes">Shop All Boxes</Link>
        </Button>
      </motion.section>
    </motion.div>
  );
};

export default PersonalGiftingPage;