import React from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ShoppingCart, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const { toast } = useToast();

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated 🚧",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      className: "bg-accent border-accent text-accent-foreground",
    });
  };

  if (cartItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 py-12 text-center min-h-[calc(100vh-200px)] flex flex-col justify-center items-center"
      >
        <ShoppingCart size={64} className="text-primary mb-6" />
        <h1 className="text-3xl font-bold mb-4 text-foreground">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added any exquisite Reign Boxes to your cart yet.</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link to="/">Continue Shopping</Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 md:px-6 py-12"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-foreground">Your Shopping Cart</h1>
        <p className="text-lg text-muted-foreground">Review your selected items and proceed to checkout.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item, index) => (
            <motion.div
              key={`${item.id}-${item.name}-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden card-hover border-border bg-card text-card-foreground">
                <div className="flex items-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                    <img  alt={item.name} className="w-full h-full object-cover" src={item.imageSrc || "https://images.unsplash.com/photo-1580901369227-308f6f40b7c6?q=80&w=600&auto=format&fit=crop"} />
                  </div>
                  <div className="p-4 md:p-6 flex-grow">
                    <CardTitle className="text-xl md:text-2xl mb-1 text-foreground">{item.name}</CardTitle>
                    <p className="text-lg font-semibold text-primary mb-2">{item.price}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <Button variant="outline" size="icon" className="h-8 w-8 border-primary text-primary hover:bg-primary/10" onClick={() => updateQuantity(item.id, item.name, item.quantity - 1)}>
                        <Minus size={16} />
                      </Button>
                      <span className="text-lg font-medium w-8 text-center text-foreground">{item.quantity}</span>
                      <Button variant="outline" size="icon" className="h-8 w-8 border-primary text-primary hover:bg-primary/10" onClick={() => updateQuantity(item.id, item.name, item.quantity + 1)}>
                        <Plus size={16} />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10 hover:text-destructive p-1" onClick={() => removeFromCart(item.id, item.name)}>
                      <Trash2 size={16} className="mr-1" /> Remove
                    </Button>
                  </div>
                  <div className="p-4 md:p-6 text-right">
                     <p className="text-lg md:text-xl font-bold text-foreground">
                        ₦{(parseFloat(item.price.replace(/[^0-9.-]+/g,"")) * item.quantity).toLocaleString()}
                     </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="sticky top-24 card-hover border-primary premium-border bg-card text-card-foreground">
              <CardHeader>
                <CardTitle className="text-2xl gold-gradient-text">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cartCount} items)</span>
                  <span className="text-foreground font-medium">₦{cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span className="text-foreground font-medium">Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between text-xl font-bold text-foreground">
                  <span>Total</span>
                  <span>₦{cartTotal.toLocaleString()}</span>
                </div>
              </CardContent>
              <CardFooter className="flex-col gap-3">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group" onClick={handleCheckout}>
                  Proceed to Checkout <CreditCard size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" asChild className="w-full border-primary text-primary hover:bg-primary/10">
                  <Link to="/">Continue Shopping</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default CartPage;