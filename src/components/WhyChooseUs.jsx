import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Heart, Clock, MapPin, Smile, CheckCircle } from "lucide-react";

const reasons = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "Thoughtful Partners",
    description: "Your name, your voice, our logistics. We ensure your gifting reflects your brand and sentiment perfectly."
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: "Designed for the Moment",
    description: "We don’t just pack items — we craft experiences. Each box is curated to create a lasting impression."
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "Fast, Reliable Delivery",
    description: "From last-minute thank-yous to pre-scheduled gifting campaigns, we deliver on time, every time."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Snack & Wellness Options",
    description: "Gifts that feel good and taste even better. We offer a range of delightful and health-conscious choices."
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Lagos-Based, Nationwide Ready",
    description: "Enjoy same-day delivery in Lagos or scheduled delivery across Nigeria. We're here to serve you."
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Customisation Experts",
    description: "Tailor boxes with your branding, messaging, or printed stationery for a truly personal touch."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Why Choose <span className="gold-gradient-text">Reign Boxes?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            We're more than just a gifting company. We're your partners in creating memorable moments and fostering meaningful connections.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="w-full bg-card text-card-foreground border-border card-hover">
                <CardHeader className="items-center text-center pb-3">
                  <div className="p-3 bg-primary/10 rounded-full mb-3 inline-block border border-primary/20">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;