import React from "react";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Instagram, Facebook, Twitter, Mail, MessageSquare, MapPin, Gift } from "lucide-react"; // Changed Phone to MessageSquare for WhatsApp

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-secondary pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <a href="#home" className="flex items-center text-2xl font-bold text-foreground">
              <Gift size={28} className="mr-2 text-primary" />
              <span className="gold-gradient-text">Reign</span> Boxes
            </a>
            <p className="text-muted-foreground text-sm">
              Premium gift boxes and exceptional catering services for all your special occasions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="font-semibold text-lg text-foreground">Quick Links</span>
            <ul className="space-y-2">
              <li><a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#gift-boxes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Boxes</a></li>
              <li><a href="#reign-bites" className="text-sm text-muted-foreground hover:text-primary transition-colors">Reign Bites</a></li>
              <li><a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">Why Us</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="font-semibold text-lg text-foreground">Our Offerings</span>
            <ul className="space-y-2">
              <li><a href="#gift-boxes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Corporate Gifting</a></li>
              <li><a href="#gift-boxes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Personal Gifting</a></li>
              <li><a href="#reign-bites" className="text-sm text-muted-foreground hover:text-primary transition-colors">Event Catering</a></li>
              <li><a href="#reign-bites" className="text-sm text-muted-foreground hover:text-primary transition-colors">Brunch Services</a></li>
              <li><a href="#reign-bites" className="text-sm text-muted-foreground hover:text-primary transition-colors">Light Snacks Selection</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="font-semibold text-lg text-foreground">Contact Us</span>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">Lagos, Nigeria (Nationwide Delivery)</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={18} className="text-primary shrink-0" />
                <a href="https://wa.me/2349136034654" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +234 913 603 4654 (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hello@reignboxes.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  hello@reignboxes.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <Separator className="mb-8 bg-border/70" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Reign Boxes. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;