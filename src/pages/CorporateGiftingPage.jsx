import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, Users, Gift, CalendarDays, Zap, Award, MessageSquare, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

const CorporateGiftingPage = () => {
  const benefits = [
    { icon: <Users size={24} className="text-primary" />, title: "Employee Recognition", description: "Show appreciation and boost morale with thoughtful gifts for milestones, achievements, or just because." },
    { icon: <Gift size={24} className="text-primary" />, title: "Client Appreciation", description: "Strengthen business relationships and foster loyalty by sending premium gifts to your valued clients." },
    { icon: <Building size={24} className="text-primary" />, title: "Brand Building", description: "Enhance your brand image with custom-branded boxes that reflect your company's values and style." },
    { icon: <CalendarDays size={24} className="text-primary" />, title: "Event & Conference Gifting", description: "Make your events memorable with welcome gifts, speaker tokens, or attendee goodie bags." },
    { icon: <Zap size={24} className="text-primary" />, title: "Holiday & Festive Gifting", description: "Celebrate festive seasons with curated gift boxes that spread joy to employees and clients alike." },
    { icon: <Award size={24} className="text-primary" />, title: "Sales & Marketing Incentives", description: "Motivate your sales team or reward customers for their engagement with unique gift solutions." },
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
          <Briefcase size={48} className="text-primary" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-foreground"
        >
          Corporate Gifting with <span className="gold-gradient-text">Reign Boxes</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
        >
          Elevate your business relationships and brand presence with our bespoke corporate gifting solutions. We design thoughtful, ready-to-send boxes tailored to your brand and purpose.
        </motion.p>
      </header>

      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img  alt="Team receiving corporate gifts" className="rounded-xl shadow-xl w-full h-auto object-cover" src="/public/images/corporate gifting.png" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">Tailored for Your Success</h2>
            <p className="text-muted-foreground">
              At Reign Boxes, we understand that corporate gifting is more than just a present; it's a strategic tool. Whether you're an HR team looking to boost employee morale, an office manager sourcing thoughtful welcome kits, or a founder aiming to impress key clients, we've got you covered.
            </p>
            <p className="text-muted-foreground">
              Each box is fully customisable and can be delivered with your company’s branding, personalised messaging, or printed stationery, ensuring a seamless brand experience.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Discuss Your Needs <MessageSquare size={18} className="ml-2 group-hover:scale-110 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          Benefits & Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
              className="flex"
            >
              <div className="bg-card p-6 rounded-xl shadow-lg card-hover border-border text-card-foreground flex flex-col items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
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
        <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Impress?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Let Reign Boxes be your partner in creating memorable gifting experiences that resonate with your brand and recipients.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link to="/#contact">Contact Our Corporate Team</Link>
        </Button>
      </motion.section>
    </motion.div>
  );
};

export default CorporateGiftingPage;