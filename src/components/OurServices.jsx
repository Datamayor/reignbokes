import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, Gift, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Corporate Gifting",
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    description: "For HR teams, office managers, team leads & founders. We design thoughtful, ready-to-send boxes tailored to your brand and purpose - delivered where and when you need them.",
    details: "Each box is customisable and can be delivered with your company’s branding, messaging, or printed stationery.",
    imageAlt: "Professionally arranged corporate gift boxes",
    imageReplace: "Professionally arranged corporate gift boxes with company branding",
    learnMoreLink: "/corporate-gifting"
  },
  {
    title: "Personal Gifting (B2C)",
    icon: <Gift className="h-10 w-10 text-primary" />,
    description: "For busy professionals and thoughtful gifters. Not every great gift needs weeks of planning. Reign Boxes makes it easy to send something meaningful — quickly and beautifully.",
    details: "Choose from our curated selection or let us help you create the perfect personalized gift.",
    imageAlt: "Beautifully wrapped personal gift box",
    imageReplace: "Beautifully wrapped personal gift box with a bow",
    learnMoreLink: "/personal-gifting"
  }
];

const OurServices = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Our <span className="gold-gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Tailored gifting solutions for every need, ensuring memorable experiences for both corporate and personal occasions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <Card className="h-full w-full card-hover overflow-hidden bg-card text-card-foreground border-border flex flex-col">
                <div className="aspect-video w-full overflow-hidden border-b border-border">
                  <img  alt={service.imageAlt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="/public/images/reignbox.png" />
                </div>
                <CardHeader className="pb-4">
                  <div className="mb-3">{service.icon}</div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{service.details}</p>
                </CardContent>
                <CardContent className="mt-auto pt-0">
                   <Button asChild variant="link" className="group text-primary p-0 hover:text-primary/80">
                    <Link to={service.learnMoreLink}>
                      Learn More
                      <ArrowRight size={16} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;