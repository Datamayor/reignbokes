import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ShoppingBag, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Boxes", href: "/#gift-boxes" },
    { name: "Reign Bites", href: "/#reign-bites" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact", href: "/#contact" },
  ];

  const NavItem = ({ href, children, onClick }) => {
    if (href.startsWith('/#')) {
      return (
        <a
          href={href}
          onClick={(e) => {
            if (onClick) onClick(e);
            const targetId = href.substring(2);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              e.preventDefault();
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            if (isOpen) setIsOpen(false);
          }}
          className="text-foreground hover:text-primary transition-colors font-medium py-2 md:py-0"
        >
          {children}
        </a>
      );
    }
    return (
      <NavLink
        to={href}
        onClick={() => {
          if (onClick) onClick();
          if (isOpen) setIsOpen(false);
        }}
        className={({ isActive }) =>
          `text-foreground hover:text-primary transition-colors font-medium py-2 md:py-0 ${isActive && href !== "/" ? "text-primary" : ""}`
        }
      >
        {children}
      </NavLink>
    );
  };


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link to="/" className="flex items-center text-2xl md:text-3xl font-bold text-foreground">
              <Gift size={28} className="mr-2 text-primary" />
              <span className="gold-gradient-text">Reign</span> Boxes
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <NavItem href={link.href}>{link.name}</NavItem>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild className="relative flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/cart">
                  <ShoppingBag size={18} />
                  <span>Cart</span>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </Button>
            </motion.div>
          </div>

          <div className="md:hidden flex items-center gap-2">
             <Button asChild variant="ghost" size="icon" className="relative text-foreground hover:bg-secondary">
                <Link to="/cart">
                  <ShoppingBag size={22} />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
              </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="text-foreground hover:bg-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 py-4 bg-background rounded-lg shadow-lg border border-border"
          >
            <div className="flex flex-col space-y-4 px-4">
              {navLinks.map((link) => (
                <NavItem key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </NavItem>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;