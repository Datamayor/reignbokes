import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Utensils, Coffee, Package, CheckCircle, Cookie, Wind, Dot, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/components/ui/use-toast";

const mainServices = [
  {
    id: "catering",
    name: "Event Catering",
    description: "Exquisite catering services for corporate events, weddings, and special occasions. We accept bulk and custom orders, starting at N7,000 per head.",
    icon: <Utensils className="h-10 w-10 text-primary" />,
    imageReplace: "Elegant event catering setup with various dishes",
    imageAlt: "Elegant event catering setup",
    actionText: "Get a Quote",
    price: "From ₦7,000/head"
  },
];

const lightSnacks = [
  "Baked Chin Chin", "Air Fried Puff Puff", "Oat Cookies", "Nuts & Seeds", "Much more on request"
];

const brunchTiers = [
  { id: "brunch-silver", name: "Silver Brunch", price: "₦20,000", priceSuffix: "per head", tagline: "Effortless & Elegant", description: "A refined option for intimate celebrations and light morning gatherings.", features: ["2-course custom menu (starter + main)"], imageReplace: "Silver tier brunch setting with light dishes" },
  { id: "brunch-gold", name: "Gold Brunch", price: "₦30,000", priceSuffix: "per head", tagline: "Balanced & Beautiful", description: "A polished, elevated setup for executive brunches, bridal showers, and formal events.", features: ["3-course custom menu", "Premium ingredients", "Themed setup options"], imageReplace: "Gold tier brunch setup with elaborate food display" },
  { id: "brunch-platinum", name: "Platinum Brunch", price: "₦40,000", priceSuffix: "per head", tagline: "Luxury on a Plate", description: "A full-service luxury dining experience for VIP clients or special occasions.", features: ["4-course gourmet menu", "Dedicated server", "Luxury tableware & decor"], imageReplace: "Platinum tier luxury brunch experience with fine dining setup" },
];

const ReignBites = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleOrderNow = (item) => {
    addToCart({ ...item, id: item.id || item.name.toLowerCase().replace(/\s+/g, '-'), imageSrc: item.imageReplace });
  };
  
  const handleFeatureNotImplemented = () => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      className: "bg-accent border-accent text-accent-foreground",
    });
  };


  return (
    <section id="reign-bites" className="py-20 reign-bites-section">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4 border border-primary/20"
          >
            <span className="text-sm font-medium text-primary">Reign Bites</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Everyday Treats. <span className="gold-gradient-text">Exceptional Taste.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            From fluffy puff puff to crunchy chips and buttery buns, Reign Bites delivers freshly made snacks that are both nostalgic and elevated.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex"
            >
              <Card className="h-full w-full card-hover overflow-hidden bg-card text-card-foreground border-border flex flex-col">
                <div className="aspect-video w-full overflow-hidden border-b border-border">
                  <img  alt={service.imageAlt} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="/public/images/reignpackage.png" />
                </div>
                <CardHeader className="pb-4">
                  <div className="mb-3">{service.icon}</div>
                  <CardTitle className="text-2xl text-foreground">{service.name}</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0">
                  <Button variant="outline" className="group w-full border-primary text-primary hover:bg-primary/10" onClick={handleFeatureNotImplemented}>
                    {service.actionText}
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex"
            >
              <Card className="h-full w-full card-hover overflow-hidden bg-card text-card-foreground border-border flex flex-col">
                <div className="aspect-video w-full overflow-hidden border-b border-border">
                  <img  alt="Luxurious brunch table setting" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1495074731450-efae1263b687" />
                </div>
                <CardHeader className="pb-4">
                  <div className="mb-3"><Coffee className="h-10 w-10 text-primary" /></div>
                  <CardTitle className="text-2xl text-foreground">Reign Brunch Experience</CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">Curated, hosted, and served with class. A premium brunch experience, complete with a custom menu and a dedicated server for personalised service. Minimum booking 20 guests on all tiers.</CardDescription>
                </CardHeader>
                <CardFooter className="mt-auto pt-0">
                  <Button variant="outline" className="group w-full border-primary text-primary hover:bg-primary/10" onClick={() => document.getElementById('brunch-tiers-heading')?.scrollIntoView({behavior: 'smooth'})}>
                    Explore Brunch Tiers
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 p-8 bg-background rounded-xl shadow-lg border border-border"
        >
          <div className="flex items-center mb-4">
            <Cookie size={28} className="text-primary mr-3" />
            <h3 className="text-2xl font-bold text-foreground">Light Snacks Selection</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Perfect for meetings, small gatherings, or a delightful treat. Our light snacks are made fresh and with quality ingredients.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {lightSnacks.map((snack, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-2 p-3 bg-secondary/50 rounded-lg border border-border"
              >
                <CheckCircle size={16} className="text-primary" />
                <span className="text-sm text-foreground">{snack}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.h3
          id="brunch-tiers-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-10 text-foreground"
        >
          Reign Brunch <span className="gold-gradient-text">Experience Tiers</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {brunchTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <Card className={`h-full w-full card-hover overflow-hidden bg-card text-card-foreground border-border flex flex-col ${index === 1 ? 'premium-border' : ''}`}>
                <div className="aspect-video w-full overflow-hidden border-b border-border">
                  <img  alt={tier.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <CardHeader className="pb-4 text-center bg-secondary/30 border-b border-border">
                  <CardTitle className={`text-xl font-semibold ${index === 1 ? 'gold-gradient-text' : 'text-primary'}`}>{tier.name}</CardTitle>
                  <p className="text-2xl font-bold text-foreground">{tier.price} <span className="text-sm font-normal text-muted-foreground">{tier.priceSuffix}</span></p>
                  <p className="text-sm text-muted-foreground italic">{tier.tagline}</p>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <span className="font-semibold text-sm text-foreground mb-2 block">Includes:</span>
                  <ul className="space-y-1.5">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Dot size={20} className="text-primary" /> {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto pt-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => handleOrderNow(tier)}
                  >
                    <ShoppingBag size={16} className="mr-2"/> Book {tier.name}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Need something special for your event or meeting?</p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground" onClick={handleFeatureNotImplemented}>
              Order Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" onClick={handleFeatureNotImplemented}>
              Get in Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReignBites;