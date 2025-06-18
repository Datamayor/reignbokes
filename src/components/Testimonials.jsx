import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    role: "Event Planner",
    content: "The Premium Box was absolutely stunning! My client was thrilled with the presentation and quality of items. Will definitely order again for future corporate events.",
    rating: 5,
    avatarText: "CO",
    imageReplace: "Professional woman, Chioma Okafor, smiling"
  },
  {
    id: 2,
    name: "Adebayo Johnson",
    role: "CEO, TechNova",
    content: "We ordered the Executive Boxes for our key clients during our company anniversary. The presentation was impeccable and the contents were of the highest quality. Highly recommended!",
    rating: 5,
    avatarText: "AJ",
    imageReplace: "Businessman, Adebayo Johnson, in a suit"
  },
  {
    id: 3,
    name: "Ngozi Eze",
    role: "Wedding Coordinator",
    content: "Reign Bites catered our client's wedding and the service was exceptional. The food presentation was beautiful and guests couldn't stop talking about the delicious snacks.",
    rating: 5,
    avatarText: "NE",
    imageReplace: "Happy wedding coordinator, Ngozi Eze, at an event"
  },
  {
    id: 4,
    name: "Oluwaseun Adeyemi",
    role: "Marketing Director",
    content: "The Platinum Box exceeded all expectations. It was the perfect gift for our VIP clients. The attention to detail and quality of products were outstanding.",
    rating: 5,
    avatarText: "OA",
    imageReplace: "Marketing director, Oluwaseun Adeyemi, looking pleased"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground"
          >
            Discover why our clients love our premium gift boxes and catering services.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="p-8">
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      <img  alt={testimonial.name} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;