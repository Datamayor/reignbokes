import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Check, Info } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const giftBoxesData = [
  {
    id: 1,
    name: "The Signature Snack Box",
    price: "₦10,000",
    description: "A vibrant, joy-filled box packed with flavour and fun. Perfect for parties, event souvenirs, team treats, or just because.",
    features: [
      "A curated mix of crunchy, delicious snacks and sweet treats – made to be shared and enjoyed",
      "Festive crinkle filling and stylish packaging",
      "Optional add-ons for branding or personalisation (for an extra fee)"
    ],
    imageReplace: "Signature Snack Box filled with colorful snacks",
    imageAlt: "Signature Snack Box filled with colorful snacks",
    popular: false,
    premium: false,
    minOrder: "Minimum order 10 boxes"
  },
  {
    id: 2,
    name: "The Essentials Box",
    price: "₦30,000",
    description: "A warm, thoughtful gesture—simple, elegant, and impactful. Perfect for welcome gifts, staff appreciation, or conference giveaways.",
    features: [
      "A generous selection of assorted snacks (you’ll hardly find any more delicious than our array!)",
      "A useful keepsake",
      "Beautiful crinkle filling and presentation"
    ],
    imageReplace: "Essentials Box with gourmet snacks and a keepsake item",
    imageAlt: "Essentials Box with gourmet snacks and a keepsake item",
    popular: true,
    premium: false,
    minOrder: "Minimum order 1 box"
  },
  {
    id: 3,
    name: "The Signature Box",
    price: "₦50,000",
    description: "Refined and versatile—our most popular choice for premium gifting. Ideal for onboarding, farewell gifts, or client appreciation.",
    features: [
      "Our premium snack selection range",
      "Personalised message insert from you",
      "Wellness products",
      "Luxury kraft or magnetic-close box"
    ],
    imageReplace: "Signature Box showcasing premium snacks and wellness products",
    imageAlt: "Signature Box showcasing premium snacks and wellness products",
    popular: true,
    premium: true,
    minOrder: "Minimum order 1 box"
  },
  {
    id: 4,
    name: "The Prestige Box",
    price: "₦80,000",
    description: "High-end gifting that reflects your standard. Perfect for top clients, executives, and key milestones.",
    features: [
      "Expanded snack range + deluxe items (e.g. nuts, cookies, organic teas)",
      "Branded merchandise (e.g. mugs or journals)",
      "Custom card or welcome note"
    ],
    imageReplace: "Prestige Box with deluxe snacks and branded merchandise",
    imageAlt: "Prestige Box with deluxe snacks and branded merchandise",
    popular: false,
    premium: true,
    minOrder: "Minimum order 1 box"
  },
  {
    id: 5,
    name: "The Platinum Box",
    price: "₦150,000",
    description: "Reserved for your most valued relationships. For board members, high-profile guests, or game-changing partnerships.",
    features: [
      "Gourmet treats and our most premium packaging",
      "Luxury branded gifts (e.g. productivity items, wireless accessories, planners)"
    ],
    imageReplace: "Platinum Box with gourmet treats and luxury branded gifts",
    imageAlt: "Platinum Box with gourmet treats and luxury branded gifts",
    popular: false,
    premium: true,
    minOrder: "Minimum order 1 box"
  }
];

const GiftBoxes = () => {
  const { addToCart } = useCart();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const handleOrderNow = (box) => {
    addToCart({ ...box, imageSrc: box.imageReplace }); // Pass imageReplace as imageSrc
  };

  return (
    <section id="gift-boxes" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-foreground"
          >
            Our Boxes: <span className="gold-gradient-text">Curated. Memorable. Pure Delight.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            We offer five thoughtfully designed box tiers—each one created to leave a lasting impression, no matter the occasion. Kindly note that while box style and content may vary, we ensure that every Reign Box always consists of a high-quality selection of products.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {giftBoxesData.map((box) => (
            <motion.div key={box.id} variants={itemVariants} className="h-full flex">
              <Card className={`flex flex-col h-full w-full card-hover ${box.premium ? 'premium-border' : ''} ${box.popular ? 'relative overflow-visible border-primary' : 'border-border'} bg-card text-card-foreground`}>
                {box.popular && (
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-lg transform rotate-3">
                    Popular
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="aspect-video w-full rounded-md overflow-hidden mb-4 border border-border">
                    <img  alt={box.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1651761580601-4a77e280c80f" />
                  </div>
                  <CardTitle className={`${box.premium ? 'gold-gradient-text' : 'text-foreground'} text-2xl`}>
                    {box.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">{box.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <span className="font-semibold text-sm text-foreground mb-2 block">What's Inside:</span>
                  <ul className="space-y-2">
                    {box.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check size={16} className="text-primary shrink-0 mt-1" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-stretch gap-4 pt-4 mt-auto">
                  <Separator />
                  {box.minOrder && (
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Info size={14} className="text-accent" />
                      <span>{box.minOrder}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between w-full">
                    <p className="text-2xl font-bold text-primary">{box.price}</p>
                    <Button 
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => handleOrderNow(box)}
                    >
                      <ShoppingBag size={16} />
                      Order Now
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center p-8 bg-secondary/50 rounded-xl border border-border"
        >
          <h3 className="text-2xl font-bold mb-3 text-foreground">Need Something Custom?</h3>
          <p className="text-muted-foreground mb-2">We also create tailored boxes for special events, conferences, retreats, and team celebrations - in your own branding.</p>
          <p className="text-sm text-muted-foreground mb-1"><span className="font-semibold text-foreground">Minimum Order:</span> 30 boxes per tier.</p>
          <p className="text-sm text-muted-foreground mb-4"><span className="font-semibold text-foreground">Delivery:</span> Nationwide delivery available. Personalisation available on all tiers.</p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Think corporate gifting. Think Reign. Contact Us
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftBoxes;